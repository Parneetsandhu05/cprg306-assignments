"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Programmatic array for categories
  const categories = [
    "produce", "dairy", "bakery", "meat", "frozen foods", 
    "canned goods", "dry goods", "beverages", "snacks", "household", "other"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 m-4 bg-slate-900 rounded-lg max-w-sm w-full text-white">
      {/* Name Field with Label/ID connection */}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-bold">Item Name</label>
        <input
          id="name"
          type="text"
          placeholder="Item name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:border-blue-500 outline-none"
        />
      </div>

      <div className="flex gap-4">
        {/* Quantity Field */}
        <div className="flex-1">
          <label htmlFor="quantity" className="block mb-1 font-bold">Qty</label>
          <input
            id="quantity"
            type="number"
            min="1"
            max="99"
            required
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 rounded-md bg-slate-800 border border-slate-700 text-white"
          />
        </div>

        {/* Category Field - Programmatic Rendering */}
        <div className="flex-1">
          <label htmlFor="category" className="block mb-1 font-bold">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-md bg-slate-800 border border-slate-700 text-white capitalize"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-slate-800 text-white">
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-md font-bold transition-colors"
      >
        Add Item
      </button>
    </form>
  );
}