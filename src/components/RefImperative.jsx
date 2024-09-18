import { useEffect, useRef } from "react"
import Input from './Input'
export default function RefImperative () {
  const ref = useRef(null);
  useEffect(()=>{
    ref.current.focus();
  },[])
  return (
    <div>
      <Input ref={ref}/>
    </div>
  )
}