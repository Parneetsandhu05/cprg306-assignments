export default function Item({ name, quantity, category }) {
  return (
    <ul className="p-2 m-2 bg-black border border-gray-300 w-96">
      <li className="text-lg font-bold text-white">{name}</li>
      <li className="text-sm text-gray-400">Quantity: {quantity}</li>
      <li className="text-sm text-gray-400">Category: {category}</li>
    </ul>
  );
}