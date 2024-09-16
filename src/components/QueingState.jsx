import { useState } from "react"

export default function QueingState () {
  const [count, setCount] = useState(0);
  
  const onClickHandle = () =>{
    setCount(count+5);
    setCount(prevCount=>prevCount+1);
    setCount(count+5);
    setCount(count+9);


  }

  return (
    <div>
      <button onClick={onClickHandle}>Count</button>
      <div>{count}</div>
    </div>
  )
}