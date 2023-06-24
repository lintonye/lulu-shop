// ./app/api/chat/route.ts
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { productCatalog } from "./data";
import { csvParse } from "d3-dsv";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

function getProductCatalog() {
  const data = csvParse(productCatalog);
  const result = data.map(
    (d) =>
      `name: ${d["Product Title"]}\nurl: ${d["Origin URL"]}\ngender: ${d["Gender Cloths"]}\nprice: ${d["price"]}\nimage: ${d["Image URL"]}]}`
  );
  console.log(data.columns);
  console.log(result);
  return result;
}

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const systemMessage = {
    role: "system",
    content: `You are LuluAI, an AI assistant at Lululemon. Show only products available in the product catalog (delimited with three dashes). Reply in markdown. When listing a product, always include a valid URL, for example [Product name](url). Make sure to include ONLY urls from the product catalog. Do not invent new products or urls.
    
    Product catalog
  ---
    ${getProductCatalog().join("\n")} 
  ---
    `,
  };

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      systemMessage,
      ...messages.map((message: any) => ({
        content: message.content,
        role: message.role,
      })),
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
