
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";
const App = () => {

  const[allValue,setAllValue] = useState('')

  return (
    <div className="parent" style={{backgroundColor:'orange'}}>
      <h1>Parent Component</h1>
      <p style={{fontSize:"22px",fontWeight:"600",padding:"20px"}}>{allValue}</p>
        <Child setAllValue={setAllValue}/>
    </div>
  )
}

export default App
