import React, { useState } from "react";
import AddUserForm from "./AddUserForm.js";



export default function User(props)  {
  const {name, occupation, _id} = props
  const [ editToggle, setEditToggle ] = useState(false)
  return  (
    <div className="user">
      { ! editToggle ?
        <>
        <h1>Name: {name}</h1>
        <p>Occupation: {occupation}</p>
        <button 
          className="delete-btn"
          onClick={() => props.deleteUser(_id)}>
            Delete
          </button>
          <button className="edit-btn"
          onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
          </button>
          </>
        :
        <>
          <AddUserForm 
          name={name}
          occupation={occupation}
          _id={_id}
          btnText="Submit Edit"
          submit={props.editUser}
          />
          <button
          onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close
          </button>
          </>
      }
    </div>
  )
}

