"use client";

import { useChat } from "ai/react";
import { ChatMessage } from "../components/ChatMessage";
import { useState } from "react";

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#fff"
        d="M19.587.418A1.43 1.43 0 0018.19.054h-.014l-17.141 5.2a1.429 1.429 0 00-.216 2.664l7.646 3.62 3.622 7.645a1.417 1.417 0 001.41.812 1.418 1.418 0 001.251-1.028L19.945 1.83v-.014a1.43 1.43 0 00-.358-1.398zm-6.205 18.14l-.005.012-3.515-7.418 4.219-4.219a.714.714 0 00-1.01-1.01l-4.22 4.218L1.43 6.627h.012l17.134-5.198-5.194 17.129z"
      ></path>
    </svg>
  );
}

export default function Chat() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: `/api/chat?loggedIn=${loggedIn}`,
  });

  return (
    <div className="flex flex-col w-full max-w-md pb-24 mx-auto stretch">
      <div className="flex flex-col gap-3 mt-5">
        {messages.length > 0
          ? messages.map((m) => <ChatMessage key={m.id} message={m} />)
          : null}
      </div>
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full">
        <input
          className="w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Ask anything..."
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-[#AAAAAA] absolute left-[410px] bottom-[38px] rounded-full p-2 flex justify-center items-center"
        >
          <SendIcon />
        </button>
      </form>
      <div
        className="font-calibre text-xs fixed bottom-0 right-0 py-2 px-5 cursor-pointer"
        onClick={() => setLoggedIn((loggedIn) => !loggedIn)}
      >
        Lululemon{!loggedIn && " (not logged in)"}
      </div>
    </div>
  );
}
