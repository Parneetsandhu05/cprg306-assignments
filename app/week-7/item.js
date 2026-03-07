export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm border-l-4 border-orange-500 list-none">
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <div className="text-sm text-slate-300">
        Buy {quantity} in <span className="text-orange-400">{category}</span>
      </div>
    </li>
  );
}