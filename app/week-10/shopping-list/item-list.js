"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      <div className="flex gap-4 mb-4 ml-4">
        <button onClick={() => setSortBy("name")} className={`p-2 px-4 rounded ${sortBy === 'name' ? 'bg-orange-500' : 'bg-slate-700'}`}>Name</button>
        <button onClick={() => setSortBy("category")} className={`p-2 px-4 rounded ${sortBy === 'category' ? 'bg-orange-500' : 'bg-slate-700'}`}>Category</button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}