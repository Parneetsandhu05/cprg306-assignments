"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  // 1. Initialize state with the data from the JSON file
  const [items, setItems] = useState(itemsData);

  // 2. The event handler that NewItem will call when the '+' button is clicked
  const handleAddItem = (newItem) => {
    // We use the spread operator to keep existing items and add the new one at the end
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-slate-950 min-h-screen p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          Shopping List
        </h1>
        
        {/* 3. Pass the handleAddItem function to NewItem */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2 ml-4">Add New Item</h2>
          <NewItem onAddItem={handleAddItem} />
        </div>

        {/* 4. Pass the items state to ItemList */}
        <ItemList items={items} />
      </div>
    </main>
  );
}