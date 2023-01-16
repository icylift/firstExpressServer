
import  React, { useEffect, useState } from "react";
import axios from 'axios';
import User from './components/User.js'
import AddUserForm from "./components/AddUserForm.js";

function App() {
  const [users, setUsers] = useState([])


  function getUsers(){
    axios.get("/users")
    .then(res =>  setUsers(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }


  function addUser(newUser){
    axios.post("/users", newUser)
      .then(res => {
        setUsers(prevUsers => [...prevUsers, res.data])
      })
      .catch(err => console.log(err))
  }


  function deleteUser(userId){
    axios.delete(`/users/${userId}`)
    .then(res => {
      setUsers(prevUsers => prevUsers.filter(user => user._id !== userId))
    })
    .catch(err => console.log(err))
  }

  function editUser(updates, userId){
    axios.put(`/users/${userId}`, updates)
    .then(res => {
      setUsers(prevUsers => prevUsers.map(user => user._id !== userId ? user : res.data)) 
    })
    .catch(err => console.log(err))
  }

  function handleFilter(e){
    if(e.target.value === 'reset'){
      getUsers()
    } else {    
      axios.get(`/users/search/occupation?occupation=${e.target.value}`)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }
  }


  useEffect(()  =>  {
    getUsers()
  }, [])


  return (
    <div>
      <div className="user-container">
        <AddUserForm 
          submit={addUser}
          btnText = "Add User"
        />


        <h4>Filter by occupation</h4>
        <select onChange={handleFilter} className="filter-form">
          <option value="reset">- all occupation Type -</option>
          <option value="unemployed">unemployed</option>
          <option value="normal">normal</option>
          <option value="workaholic">workaholic</option>
        </select>





        {users.map(user => 
        <User  
          {...user} 
          key = {user.name}
          deleteUser={deleteUser}
          editUser={editUser}/>)}
      </div>
    </div>
  );
}

export default App;
