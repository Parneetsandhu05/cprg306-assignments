import Item from "./item";
import items from "./items.json"; // Importing the JSON data

export default function ItemList() {
  return (
  <ul className="flex flex-col items-center"> 
    {items.map((item) => (
      <Item key={item.id} {...item} />
    ))}
  </ul>
);
}