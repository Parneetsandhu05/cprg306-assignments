"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item"; // Assumes you have your new-item.js copied here
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json"; // Assumes you have your items.json copied here

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    // Clean name: "chicken breasts, 1 kg 🍗" -> "chicken"
    const cleanedName = itemName.split(",")[0].trim().replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-orange-500">Shopping List</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 bg-slate-900 rounded p-4">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}