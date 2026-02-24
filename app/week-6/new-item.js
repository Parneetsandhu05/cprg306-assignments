"use client";

import { useState } from "react";

// Part 2: Added the onAddItem prop to the function arguments
export default function NewItem({ onAddItem }) {
  // Initialize State
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Handle Form Submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Part 2: Generate a random ID as required
    const id = Math.random().toString(36).substring(2, 9);

    // Create the item object
    const item = { id, name, quantity, category };

    // Part 2: Call the function passed as a prop instead of alert()
    onAddItem(item);

    // Reset State
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex justify-center w-full">
      <form 
        onSubmit={handleSubmit} 
        className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full rounded-lg shadow-xl"
      >
        <div className="mb-2">
          <input
            type="text"
            placeholder="Item name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            // Added bg-slate-800 and text-white for better visibility
            className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans bg-slate-800 text-white placeholder-gray-400"
          />
        </div>

        <div className="flex justify-between">
          <input
            type="number"
            min="1"
            max="99"
            required
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans bg-slate-800 text-white"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans bg-slate-800 text-white"
          >
            <option value="produce text-black">Produce</option>
            <option value="dairy text-black">Dairy</option>
            <option value="bakery text-black">Bakery</option>
            <option value="meat text-black">Meat</option>
            <option value="frozen text-black">Frozen Foods</option>
            <option value="canned text-black">Canned Goods</option>
            <option value="dry text-black">Dry Goods</option>
            <option value="beverages text-black">Beverages</option>
            <option value="snacks text-black">Snacks</option>
            <option value="household text-black">Household</option>
            <option value="other text-black">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </form>
    </div>
  );
}