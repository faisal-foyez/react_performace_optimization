import { useState } from "react";

export default function AdjustState ({items}) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // Better: Adjust the state while rendering
  const [prevItems, setPrevItems] = useState(items);
  console.log(items,prevItems);
  if (items !== prevItems) {
    console.log(items,prevItems);
    setPrevItems(items);
    setSelection(null);
  }
  
  return(
    <div>
      <ul>
        {items.map(v=>(
          <li><input type="checkbox" name="group" checked={selection===v} onChange={()=>{setSelection(v)}}/> {v}</li>
        ))}
      </ul>
      <section>
        {selection}
      </section>  
    </div>
  )
}