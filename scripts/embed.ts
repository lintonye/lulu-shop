import { FAQ } from "./data.ts";

async function getEmbedding(text: string, openAIKey: string) {
  const response = await fetch("https://api.openai.com/v1/embeddings", {
    headers: {
      Authorization: `Bearer ${openAIKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      input: text,
      model: "text-embedding-ada-002",
    }),
  });
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  const embedding = result.data[0].embedding;
  return { text, embedding };
}

// Based on RecursiveCharacterTextSplitter in langchain
async function splitText(text: string) {
  const separators: string[] = ["\n\n", "\n", " ", ""];
  const chunkSize = 1000;
  const chunkOverlap = 100;

  function joinDocs(docs: string[], separator: string): string | null {
    const text = docs.join(separator).trim();
    return text === "" ? null : text;
  }

  function mergeSplits(splits: string[], separator: string): string[] {
    const docs: string[] = [];
    const currentDoc: string[] = [];
    let total = 0;
    for (const d of splits) {
      const _len = d.length;
      if (total + _len >= chunkSize) {
        if (total > chunkSize) {
          console.warn(
            `Created a chunk of size ${total}, +
  which is longer than the specified ${chunkSize}`
          );
        }
        if (currentDoc.length > 0) {
          const doc = joinDocs(currentDoc, separator);
          if (doc !== null) {
            docs.push(doc);
          }
          // Keep on popping if:
          // - we have a larger chunk than in the chunk overlap
          // - or if we still have any chunks and the length is long
          while (
            total > chunkOverlap ||
            (total + _len > chunkSize && total > 0)
          ) {
            total -= currentDoc[0].length;
            currentDoc.shift();
          }
        }
      }
      currentDoc.push(d);
      total += _len;
    }
    const doc = joinDocs(currentDoc, separator);
    if (doc !== null) {
      docs.push(doc);
    }
    return docs;
  }

  // Main splitter code
  const finalChunks: string[] = [];
  // Get appropriate separator to use
  let separator: string = separators[separators.length - 1];
  for (const s of separators) {
    if (s === "") {
      separator = s;
      break;
    }
    if (text.includes(s)) {
      separator = s;
      break;
    }
  }

  // Now that we have the separator, split the text
  let splits: string[];
  if (separator) {
    splits = text.split(separator);
  } else {
    splits = text.split("");
  }

  // Now go merging things, recursively splitting longer texts.
  let goodSplits: string[] = [];
  for (const s of splits) {
    if (s.length < chunkSize) {
      goodSplits.push(s);
    } else {
      if (goodSplits.length) {
        const mergedText = mergeSplits(goodSplits, separator);
        finalChunks.push(...mergedText);
        goodSplits = [];
      }
      const otherInfo = await splitText(s);
      finalChunks.push(...otherInfo);
    }
  }
  if (goodSplits.length) {
    const mergedText = mergeSplits(goodSplits, separator);
    finalChunks.push(...mergedText);
  }
  return finalChunks;
}

async function main() {
  const docs = await splitText(FAQ);
  console.log(`Split ${FAQ.length} characters into ${docs.length} docs`);
  const outputFile = "./data.json";
  const openAIKey = Deno.env.get("OPENAI_API_KEY");
  if (!openAIKey) {
    throw new Error("OPENAI_API_KEY must be set.");
  }
  const embeddings = await Promise.all(
    docs.map((doc) => getEmbedding(doc, openAIKey))
  );
  await Deno.writeTextFile(outputFile, JSON.stringify(embeddings));
  console.log(`Wrote ${embeddings.length} embeddings to ${outputFile}`);
}

await main();
