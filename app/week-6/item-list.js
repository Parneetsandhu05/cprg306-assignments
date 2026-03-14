"use client";

import { useState } from "react";
import Item from "./item";

// 1. Accept 'items' as a prop from the parent
export default function ItemList({ items }) {
  // 2. Initialize state for sorting
  const [sortBy, setSortBy] = useState("name");

  // 3. Sorting Logic: Create a sorted copy of the items prop
  // We use [...items] to avoid mutating the original prop
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="mt-8">
      {/* 4. Sorting Buttons */}
      <div className="flex items-center gap-4 mb-6 ml-4">
        <span className="text-white font-semibold">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-6 py-2 rounded-md font-bold transition ${
            sortBy === "name" ? "bg-orange-500 text-white" : "bg-orange-800 text-orange-200"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-6 py-2 rounded-md font-bold transition ${
            sortBy === "category" ? "bg-orange-500 text-white" : "bg-orange-800 text-orange-200"
          }`}
        >
          Category
        </button>
      </div>

      {/* 5. Render the sorted list */}
      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}