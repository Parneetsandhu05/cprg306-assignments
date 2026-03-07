"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Demonstrate Immutability: Sort a COPY of the items prop
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button onClick={() => setSortBy("name")} className={`p-2 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-slate-700'}`}>Sort by Name</button>
        <button onClick={() => setSortBy("category")} className={`p-2 ${sortBy === 'category' ? 'bg-orange-500' : 'bg-slate-700'}`}>Sort by Category</button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}