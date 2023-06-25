"use client";
import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";

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
      </div>
    </div>
  );
}
