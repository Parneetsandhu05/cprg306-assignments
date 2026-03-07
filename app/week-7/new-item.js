"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category
    };

    onAddItem(item); // Sending the item back to page.js

    // Reset Form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-900 rounded shadow-md max-w-sm text-white">
      <div className="mb-2">
        <label htmlFor="name" className="block text-sm font-bold">Name</label>
        <input 
          id="name"
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Item Name" 
          className="text-white bg-slate-800 border border-slate-700 w-full p-2 rounded" 
          required 
        />
      </div>

      <div className="flex gap-2">
        <div className="flex-1">
          <label htmlFor="quantity" className="block text-sm font-bold">Qty</label>
          <input 
            id="quantity"
            type="number" 
            min="1" 
            max="99"
            value={quantity} 
            onChange={(e) => setQuantity(Number(e.target.value))} 
            className="text-white bg-slate-800 border border-slate-700 w-full p-2 rounded" 
            required 
          />
        </div>
        <div className="flex-1">
          <label htmlFor="category" className="block text-sm font-bold">Category</label>
          <select 
            id="category"
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="text-white bg-slate-800 border border-slate-700 w-full p-2 rounded"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button type="submit" className="bg-blue-600 hover:bg-blue-500 w-full py-2 mt-4 rounded font-bold">
        + Add Item
      </button>
    </form>
  );
}