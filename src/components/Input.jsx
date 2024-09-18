import { forwardRef, useImperativeHandle, useRef } from "react"
const Input = forwardRef((props,ref)=>{
  const realInputRef = useRef(null);
  useImperativeHandle(ref,()=>{
    return {
      focus(){
        realInputRef.current.focus();
      }
    }
  })
  return (
    <input type="text" style={{height:50, width:200}} ref={realInputRef}/>
  )
})
export default Input;