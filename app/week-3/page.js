import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-black min-h-screen p-5">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}