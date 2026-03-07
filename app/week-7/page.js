"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  // Initialize state with the JSON data
  const [items, setItems] = useState(itemsData);

  // handleAddItem adds the newItem to the items array using the spread operator
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); // Immutability: creating a new array
  };

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <h1 className="text-4xl font-bold mb-8 text-orange-500">Shopping List</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Add New Item</h2>
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Current Inventory</h2>
          <ItemList items={items} />
        </div>
      </div>
    </main>
  );
}