import React, { useState } from 'react'

function Localobj() {

    const[language,setlanguage]=useState("");
    const[framework,setframework]=useState("")



   function addtolocal(){

    var courses=JSON.parse(localStorage.getItem("courses") || "[]")

    var course={
        language:language,
        framework:framework

    }

    courses.push(course)

    localStorage.setItem("courses",JSON.stringify(course))


   }
  return (
    <div>

        <h1>Local Storage Object</h1>

        <input type="text" placeholder='language' value={language} onChange={(e)=>{setlanguage(e.target.value)}}/> <br/>
        <input type="text" placeholder='framework' value={framework} onChange={(e)=>{setframework(e.target.value)}}/> <br/>
        <button onClick={addtolocal}>Save Local</button>
    </div>
  )
}

export default Localobj;
