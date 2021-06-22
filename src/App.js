import React, { useState } from "react";
import Coin from './component/coin'
import './App.css'


const App = ()=>{
  const [value,setValue] = useState(0)
  let [count,setCount] = useState(0)
  let [head,setHead] = useState(0)
  let [tail,setTail] = useState(0)

  const coinToss = () => {
    let result = Math.floor(Math.random()*2)
    setValue(result)
    setCount(count+1)
    if(!result){
      setTail(tail+1)
    }else{
      setHead(head+1)
    }
  }
  return (
    <div className="container">
      <Coin face={value}></Coin>
      <div className="container">
        <button className="button" onClick={coinToss}>Toss</button>
        <h2>Total Tosses : {count}   Heads: {head}  Tails : {tail} </h2>
      </div>
    </div>
)}

export default App