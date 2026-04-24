"use client";

import { MessageForm } from "@/components/MessageForm";
import { MessagesTable, Message } from "@/components/MessagesTable";
import { useState, useRef } from "react";

// Tymczasowe dane przykładowe - zostaną zastąpione przez RTK Query
const initialMessages: Message[] = [
  { id: 1, message: "Pierwsza wiadomość testowa" },
  { id: 2, message: "Druga wiadomość testowa" },
  { id: 3, message: "Trzecia wiadomość testowa" },
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  // Licznik ID zapewniający unikalność - nie resetuje się przy usuwaniu wiadomości
  const nextIdRef = useRef<number>(Math.max(0, ...initialMessages.map(m => m.id)) + 1);

  const handleAddMessage = (message: string) => {
    // TODO: Tutaj będzie integracja z RTK Query
    const newMessage: Message = {
      id: nextIdRef.current++,
      message,
    };
    setMessages([...messages, newMessage]);
  };

  const handleEditMessage = (id: number, newMessage: string) => {
    // TODO: Tutaj będzie integracja z RTK Query
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, message: newMessage } : msg
    ));
  };

  const handleDeleteMessage = (id: number) => {
    // TODO: Tutaj będzie integracja z RTK Query
    setMessages(messages.filter(msg => msg.id !== id));
  };

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-center">Aplikacja Wiadomości</h1>

        <section className="flex flex-col items-center gap-4">
          <h2 className="text-lg font-semibold">Dodaj nową wiadomość</h2>
          <MessageForm onSubmit={handleAddMessage} />
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Lista wiadomości</h2>
          <MessagesTable 
            messages={messages}
            onEdit={handleEditMessage}
            onDelete={handleDeleteMessage}
          />
        </section>
      </main>
    </div>
  );
}
