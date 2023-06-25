"use client";
import { Message } from "ai/react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {
  getProductCatalog,
  getProductCatalogAsString,
} from "@/app/api/chat/data";

type Product = {
  name: string;
  price: string;
  url: string;
  imageUrl: string;
};

function ProductCarousel({ products }: { products: Product[] }) {
  return (
    <div className="flex gap-1 mt-2 w-[112%] overflow-scroll ml-[-26px]">
      {products.map((product) => (
        <Link href={product.url} key={product.url} target="_blank">
          <div className="flex gap-1 flex-col text-xs w-[150px]">
            <img src={product.imageUrl} alt="Product image" />
            <div className="break-words">{product.name}</div>
            <div className="opacity-50">{product.price}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Use regex to search for all URLs in the text
function findUrls(text: string): string[] {
  const urlRegex = /(https?:\/\/[^\s)]+)/g;
  return text.match(urlRegex) || [];
}

function extractProducts(text: string): Product[] {
  const urls = findUrls(text);
  const products = getProductCatalog().filter((product) =>
    urls.includes(product["Origin URL"])
  );
  console.log("urls", urls, "products", products);
  return products.map((product) => ({
    name: product["Product Title"],
    price: product["price"],
    url: product["Origin URL"],
    imageUrl: product["Image URL"],
  }));
}

type ChatMessageProps = {
  message: Message;
};
export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  return (
    <div className="whitespace-pre-wrap">
      <div className={`flex gap-2 ${isUser ? "flex-row" : "flex-row-reverse"}`}>
        <div className="text-[10px] bg-[#D00A2C] text-white p-2 rounded-[50%] w-[25px] h-[25px] self-baseline shrink-0 flex justify-center items-center">
          {isUser ? "YOU" : "VA"}
        </div>
        <div
          className={`text-sm p-3 rounded-md flex-1 ${
            isUser ? "bg-black text-white" : "bg-[#EAEAEA]"
          }`}
        >
          <ReactMarkdown
            linkTarget="_blank"
            components={{
              a: ({ className, ...props }) => (
                <a {...props} className={`${className} underline`} />
              ),
              ul: ({ className, ...props }) => (
                <ul {...props} className={`${className} list-disc ml-4`} />
              ),
              ol: ({ className, ...props }) => (
                <ol {...props} className={`${className} list-decimal ml-4`} />
              ),
              li: ({ className, ...props }) => (
                <li {...props} className={`${className} whitespace-normal`} />
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      </div>
      {message.role === "assistant" && (
        <ProductCarousel products={extractProducts(message.content)} />
      )}
    </div>
  );
}
