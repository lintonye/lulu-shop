"use client";

import { useChat } from "ai/react";
import { ChatMessage } from "../components/ChatMessage";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="font-calibre text-3xl">Lululemon shop bot</div>
      <div className="flex flex-col gap-3">
        {messages.length > 0
          ? messages.map((m) => <ChatMessage key={m.id} message={m} />)
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
