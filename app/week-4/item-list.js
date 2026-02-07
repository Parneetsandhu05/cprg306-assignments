import Item from "./item";
import items from "./items.json"; // Importing the JSON data

export default function ItemList() {
  return (
    <div>
      {items.map((item) => (
        <Item 
          key={item.id} 
          name={item.name} 
          quantity={item.quantity} 
          category={item.category} 
        />
      ))}
    </div>
  );
}