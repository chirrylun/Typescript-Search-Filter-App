'use client'
import React from "react";
import InputField from "@/components/Inputfield";
import { useList } from "./hooks/useList";

export default function HomePage() {
  const { filteredList, List, keyword, setKeyword } = useList();

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }
  return (
    <main className="bg-black w-full p-4 items-center flex flex-col h-screen">
      <div>
        <h1 className="text-white text-2xl font-sans">Simple Search Filter</h1>
      </div>

      <div className="mt-4">
        <InputField value={keyword} onChange={handleKeywordChange}/>
      </div>

      <div className="mt-3">
        <ul>
        {filteredList().map((item, index)=>(
          <li className="text-white font-sans my-1">{item}</li>
        ))}
        </ul>
        
      </div>
    </main>
  );
}
