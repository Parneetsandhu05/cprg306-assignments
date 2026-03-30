"use client"; // Critical: This allows the buttons to work!

import Link from "next/link";
import { useUserAuth } from "./contexts/AuthContext";

export default function Navbar() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-900 text-white border-b border-slate-800">
      <div className="font-bold text-orange-500 text-xl">
        <Link href="/">Shopping App</Link>
      </div>
      
      <div className="flex gap-6 items-center">
        {user && (
          <Link href="/week-10/shopping-list" className="hover:text-orange-400">
            My List
          </Link>
        )}
        
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm hidden sm:block">Welcome, {user.displayName || user.email}</span>
            <button 
              onClick={firebaseSignOut}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button 
            onClick={gitHubSignIn}
            className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-sm font-bold transition"
          >
            Sign In with GitHub
          </button>
        )}
      </div>
    </nav>
  );
}