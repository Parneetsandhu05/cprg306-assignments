import Link from "next/link";

export default function Page() {
  return (
    <main className="p-8 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-orange-500">Week 10: Cloud Development</h1>
      <p className="mb-4">Welcome to the Firebase-integrated Shopping List app.</p>
      <Link 
        href="/week-10/shopping-list" 
        className="text-blue-400 hover:underline text-lg"
      >
        Click here to go to your Shopping List
      </Link>
    </main>
  );
}