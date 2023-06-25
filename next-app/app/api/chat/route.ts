// ./app/api/chat/route.ts
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { getProductCatalog } from "./data";
import { generalSystemPrompt } from "./prompts";
import { get } from "http";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const systemMessage = {
    role: "system",
    content: generalSystemPrompt(getProductCatalog()),
  };

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

  console.log(messages);

  const response = await openai.createChatCompletion({
    model: "gpt-4", //3.5-turbo-16k",
    stream: true,
    messages: [systemMessage, ...messages],
  });

  // console.log(await response.json());

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
