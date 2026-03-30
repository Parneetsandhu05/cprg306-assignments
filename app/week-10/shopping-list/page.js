"use client";


import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react"; 
import { getItems, addItem } from "../_services/shopping-list-service";
// 1. Import the hook from your contexts folder
import { useUserAuth } from "../../contexts/AuthContext"; 
import Link from "next/link";

export default function Page() {
  // 2. Get the user object from the AuthContext
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const loadItems = async () => {
    try {
      const itemsList = await getItems(user.uid);
      setItems(itemsList);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };


  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]); // This runs as soon as the user logs in
  const handleAddItem = async (newItem) => {
    if (user) {
      try {
        const id = await addItem(user.uid, newItem);
        const itemWithId = { ...newItem, id: id };
        setItems((prevItems) => [...prevItems, itemWithId]);
      } catch (error) {
        console.error("Error adding item to Firestore:", error);
      }
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(",")[0].trim().replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanedName);
  };

  // 3. PROTECTION CHECK: If user is null, do not render the list
  if (!user) {
    return (
      <main className="min-h-screen bg-black text-white p-10 flex flex-col items-center justify-center">
        <div className="text-center bg-slate-900 p-8 rounded-lg border border-red-500/50">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Access Denied</h1>
          <p className="text-slate-300 mb-6">
            You must be signed in to view your shopping list.
          </p>
          <Link 
            href="/week-9" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition-colors"
          >
            Go to Login Page
          </Link>
        </div>
      </main>
    );
  }

  // 4. If user is NOT null, render the full Shopping List UI
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