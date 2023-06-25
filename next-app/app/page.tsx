"use client";

import { useChat } from "ai/react";
import { ChatMessage } from "../components/ChatMessage";
import { useState } from "react";

export default function Chat() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: `/api/chat?loggedIn=${loggedIn}`,
  });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div
        className="font-calibre text-3xl"
        onClick={() => setLoggedIn((loggedIn) => !loggedIn)}
      >
        Lululemon{!loggedIn && " (not logged in)"}
      </div>
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
