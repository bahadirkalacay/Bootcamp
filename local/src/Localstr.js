import React, { useState } from 'react'

function Localstr() {

    const [username,setusername]=useState("")


    function addtolocalstorage(){

        localStorage.setItem("username",username)}
  return (
    <div>
        <h1>Local Storage</h1>

        <input type="text" placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        <br/>
        <button onClick={addtolocalstorage}>Add To Local</button>

        <h1>The value of username in localstorage is {localStorage.getItem("username")}</h1>
    </div>
  )
}
export default Localstr;
