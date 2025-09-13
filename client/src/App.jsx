import Hero from './components/Hero'
import { useState,useEffect } from 'react'
import './App.css'

function App() {
  
const [data,setdata] = useState("loading...")
useEffect(()=>{
  fetch("http://localhost:5000/api/hello")
  .then((responce)=>responce.json())
  .then((result)=>setdata(result.message));

},[]);



  return (
    <>
      <div>
        
        <Hero/>


         <section style={{ padding: "20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "10px" }}>Frontend + Backend Connection</h2>
        <p style={{ color: "blue", fontSize: "18px" }}>{data}</p>
      </section>
      </div>
    </>
  )
}

export default App
