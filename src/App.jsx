import { useState } from "react";

export default function App () {
  const itemsArray = ['Bread', 'Milk', 'Eggs'];
  const [items, setItems] = useState(itemsArray);

  function markGrocey (index) {
    const updateItems = items.map((item, i) => {
      if (i === index && !item.startsWith('✓ ')) {
        return `✓ ${item}`;
      }
      return item;
    })

    setItems(updateItems);
  }
}