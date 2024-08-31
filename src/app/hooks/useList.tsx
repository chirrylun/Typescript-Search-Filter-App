'use client'
import { useState } from "react";

export function useList() {
  const List: string[] = [
    "Apples",
    "Oranges",
    "Grapes",
    "Apricot",
    "Avocado",
    "Pear",
    "Pineapple",
    "Figs",
    "Bananas",
    "Potatoes",
  ];

  const [keyword, setKeyword] = useState<string>("")

  const filteredList = (): string[] => {
    return List.filter(item => item.toLowerCase().includes(keyword.toLowerCase()))
  }

  return{filteredList, List, keyword, setKeyword}


}
