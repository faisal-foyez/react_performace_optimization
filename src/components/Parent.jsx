import { useMemo, useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

export default function Parent () {
  console.log('parent rendering')
  const [count, setCount] = useState(0);
  const [countCopy, setCountCopy]  = useState(0);

  const onHeavyCalcualtion = () =>{
    let x = 0;
    for(let i=count; i<10000000000; i++){
      x+=1;
    }
    return x;
  }
  const memoizedHeavyCalculation = useMemo(onHeavyCalcualtion,[count]);
  return (
    <div>
      {memoizedHeavyCalculation}
      Parent {countCopy}
      <button onClick={()=>{setCount(100)}}>count increment</button>
      <ChildOne countOne={count} />
      <ChildTwo countTwo = {count} />
    </div>
  )
}