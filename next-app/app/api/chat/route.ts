// ./app/api/chat/route.ts
import {
  ChatCompletionRequestMessage,
  Configuration,
  OpenAIApi,
} from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { getCustomerStatus, getProductCatalogAsString } from "./data";
import { generalSystemPrompt } from "./prompts";
import { get } from "http";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

async function retrieveContext(messages: ChatCompletionRequestMessage[]) {
  const chatHistory = messages.slice(0, messages.length - 1);
  const question = messages[messages.length - 1].content;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0,
    messages: [
      ...chatHistory,
      {
        role: "user",
        content: `Given the above conversation, rephrase the follow up question (delimited with three quotes) to be a standalone question. If the user's message is not a question, make it a standalone statement. The output should be just the question/statement itself. No quotes, colons.

Avoid using pronouns such as "it", "these". Instead, extract the nouns from the conversation and use them in the output.        

User message:        
"""${question}"""

Standalone question/statement:`,
      },
    ],
    stream: false,
  });
  const result = await response.json();
  const condensedQuestion = result.choices[0].message.content;
  // retrieve context
  const context = "context";
  return { question: condensedQuestion, context };
}

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();

  const url = new URL(req.url);
  const loggedIn = url.searchParams.get("loggedIn");

  const functions = [
    {
      name: "check_url",
      description:
        "Check if the gvien URL is valid. Returns true if valid, false otherwise.",
      parameters: {
        type: "object",
        properties: {
          url: {
            type: "string",
            description: "The URL to check.",
          },
        },
      },
    },
  ];

  //   const responseCheckUrl = await openai.createChatCompletion({
  //     model: "gpt-3.5-turbo-0613",
  //     stream: true,
  //     messages: [
  //       {
  //         role: "system",
  //         content: `Answer user's question based on the product catalog below (delimited with three dashes). Always include URLs, check the urls in the response using the function provided. ALWAYS include one of "Original URLs". Do not invent URLs.

  // product catalog:
  // ---
  // ${getProductCatalog()}
  // ---
  //         `,
  //       },
  //       ...messages.map((message: any) => ({
  //         content: message.content,
  //         role: message.role,
  //       })),
  //     ],
  //     functions,
  //   });
  // const result = await responseCheckUrl.json();
  // console.log(result);

  // messages.push(
  //   {
  //     role: "assistant",
  //     content: "",
  //     function_call: { name: "getProductCatalog", arguments: "" },
  //   },
  //   {
  //     role: "function",
  //     name: "getProductCatalog",
  //     content: getProductCatalog(),
  //   }
  // );

  // console.log(messages);

  const { question, context } = await retrieveContext(messages);

  console.log({ question, context });

  const systemPrompt = generalSystemPrompt(
    getProductCatalogAsString(),
    getCustomerStatus(loggedIn === "true"),
    context
  );

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    stream: true,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: question },
    ],
  });

  // console.log(await response.json());

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
