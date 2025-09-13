import Hero from './components/Hero'
import { useState,useEffect } from 'react'
import './App.css'

function App() {
  
const [data,setdata] = useState("loading...")
useEffect(()=>{
  fetch("http://localhost:5000")
  .then((responce)=>responce.json())
  .then((result)=>setdata(result.message));

},[]);



  return (
    <>
      <div>
        
        <Hero></Hero>


         <section style={{ padding: "20px" }}>
        <h2>Frontend + Backend Connection</h2>
        <p style={{ color: "blue" }}>{data}</p>
      </section>
      </div>
    </>
  )
}

export default App
