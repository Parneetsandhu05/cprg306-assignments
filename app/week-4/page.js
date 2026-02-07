import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-950 min-h-screen p-4">
      <h1 className="text-3xl font-bold m-6 text-white">Shopping List</h1>
      <ItemList />
    </main>
  );
}