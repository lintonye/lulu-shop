"use client";

import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="font-calibre text-3xl">Lululemon shop bot</div>
      <div className="flex flex-col gap-3">
        {messages.length > 0
          ? messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                <div className="text-sm">
                  {m.role === "user" ? "User: " : "AI: "}
                </div>
                <div className="flex flex-col">
                  <ReactMarkdown
                    linkTarget="_blank"
                    components={{
                      a: ({ className, ...props }) => (
                        <a {...props} className={`${className} underline`} />
                      ),
                    }}
                  >
                    {m.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))
          : null}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
