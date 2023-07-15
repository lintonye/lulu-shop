import { ChatCompletionRequestMessage } from "openai-edge";
import { openai } from "./openai";
import faqs from "./faqs.json";

function cosineSimilarity(a: number[], b: number[]) {
  // Input validation
  if (
    !Array.isArray(a) ||
    !Array.isArray(b) ||
    a.length === 0 ||
    b.length === 0 ||
    a.length !== b.length
  ) {
    throw new Error(
      "Invalid input: Both input vectors must be non-empty arrays of the same length."
    );
  }

  // Type-checking
  if (
    !a.every((value) => typeof value === "number") ||
    !b.every((value) => typeof value === "number")
  ) {
    throw new Error(
      "Invalid input: Both input vectors must contain only numbers."
    );
  }

  const dotProduct = a.reduce((acc, value, i) => acc + value * b[i], 0);
  const aMagnitude = Math.sqrt(
    a.reduce((acc, value) => acc + value * value, 0)
  );
  const bMagnitude = Math.sqrt(
    b.reduce((acc, value) => acc + value * value, 0)
  );

  // Check for zero magnitudes and return 0 if necessary
  if (aMagnitude === 0 || bMagnitude === 0) {
    return 0;
  }
  return dotProduct / (aMagnitude * bMagnitude);
}

type Chunk = {
  text: string;
  embedding: number[];
};

async function createEmbedding(text: string) {
  const response = await openai.createEmbedding({
    input: text,
    model: "text-embedding-ada-002",
  });
  const result = await response.json();
  const embedding = result.data[0].embedding;
  return embedding;
}

async function getSimilarChunks(question: string, chunks: Chunk[]) {
  const threshold = 0.5;
  const k = 2;

  const inputVector = await createEmbedding(question);
  let topKVectors: Array<{ similarity: number; text: string }> = [];

  const updateTopK = (chunk: Chunk, similarity: number) => {
    topKVectors.push({ similarity, text: chunk.text });
    topKVectors.sort((a, b) => b.similarity - a.similarity);
    if (topKVectors.length > k) {
      topKVectors.pop();
    }
  };

  chunks.forEach((chunk) => {
    try {
      const similarity = cosineSimilarity(inputVector, chunk.embedding);
      if (
        similarity >= threshold &&
        (topKVectors.length < k ||
          similarity > topKVectors[topKVectors.length - 1].similarity)
      ) {
        updateTopK(chunk, similarity);
      }
    } catch (e) {
      console.log("!!! error", e);
    }
  });

  return topKVectors;
}

export async function retrieveContext(
  messages: ChatCompletionRequestMessage[]
) {
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
  const chunks = await getSimilarChunks(condensedQuestion, faqs);
  return {
    question: condensedQuestion,
    context: chunks.map((c) => c.text).join("\n\n"),
  };
}
