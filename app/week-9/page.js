"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";
import { useState } from "react"; // Added for error handling

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loginError, setLoginError] = useState(""); // State for user-facing errors

  const handleLogin = async () => {
    try {
      setLoginError(""); // Reset error before trying
      await gitHubSignIn();
    } catch (error) {
      // REQUIREMENT: Provide a user facing error
      setLoginError("Failed to sign in with GitHub. Please check your credentials.");
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-slate-900 p-10 rounded-lg shadow-lg border border-slate-800 text-center">
        <h1 className="text-4xl font-bold mb-6 text-orange-500">Shopping List App</h1>

        {/* Display error message if login fails */}
        {loginError && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4 text-sm">
            {loginError}
          </div>
        )}

        {user ? (
          <div className="space-y-6">
            <p className="text-xl">
              Welcome, <span className="text-orange-400 font-bold">{user.displayName}</span> ({user.email})
            </p>
            <div className="flex flex-col gap-4">
              <Link 
                href="/week-9/shopping-list" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition-all"
              >
                Go to Shopping List
              </Link>
              <button 
                onClick={handleLogout}
                className="text-slate-400 hover:text-white underline text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-slate-400">Please sign in with GitHub to manage your items.</p>
            <button 
              onClick={handleLogin}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-lg border border-slate-700 transition-all flex items-center justify-center gap-2 mx-auto"
            >
              Login with GitHub
            </button>
          </div>
        )}
      </div>
    </main>
  );
}