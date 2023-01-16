import React, {useState} from "react";

export default function AddUserForm(props)  {
  const initInputs = {name: props.name || "", occupation: props.occupation || ""}
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
  }

  function handleSubmit(e)  {
    e.preventDefault()
    props.submit(inputs, props._id)
    setInputs(initInputs)
  }

  return  (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      name="name"
      value={inputs.name}
      onChange={handleChange}
      placeholder="Name"/>

      <input
      type="text"
      name="occupation"
      value={inputs.occupation}
      onChange={handleChange}
      placeholder="Occupation"/>      
      <button>{props.btnText}</button>
    </form>
  )
}
