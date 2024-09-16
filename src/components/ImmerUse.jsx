import { useImmer } from "use-immer"

export default function ImmerUse () {
  const [person, updatePerson] = useImmer({
    name:'jamal',
    roll:1,
    address:{
      city: 'dhaka',
      postOffice:'sarulia'
    }
  })
  const onClickHandle = () =>{
    updatePerson(draft=>{
      draft.address.postOffice='siddhirganj';
    })
  }
  return (
    <div>
      <div>
      {person.name}
      </div>
      <div>{person.address.city}</div>
      <div>{person.address.postOffice}</div>

      <div>
        <button onClick={onClickHandle}>click</button>
      </div>
    </div>
  )
}