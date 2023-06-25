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
    <div className="flex gap-1 mt-2">
      {products.map((product) => (
        <Link href={product.url}>
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
  return (
    <div className="whitespace-pre-wrap">
      <div className="text-sm">
        {message.role === "user" ? "User: " : "AI: "}
      </div>
      <div className="flex flex-col">
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
        {message.role === "assistant" && (
          <ProductCarousel products={extractProducts(message.content)} />
        )}
      </div>
    </div>
  );
}
