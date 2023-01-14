
import React, { useEffect, useState } from 'react'
import axios from 'axios'




function index() {
  const[display,setDisplay]=useState("")
  const[name,setName]=useState("")
  const[number,setNumber]=useState("")
  const[email,setEmail]=useState("")
  const[grade,setGrade]=useState("")
  const[currEmail,setCurr]=useState("")

  const handleName=(event)=>{
    setName(event.target.value)
  }
  const handNumber=(event)=>{
    setNumber(event.target.value)
  }
  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }
  const handleGrade=(event)=>{
    setGrade(event.target.value)
  }

  const sendToData=async ()=>{
    const data=await axios.post('http://localhost:3001/formdatas',{
      name:name,
      email_address:email,
      grade:grade,
      phone_number:number

    }).then(
      console.log("success")
    ).catch((err)=>{
      console.log("failure")})
    
    
  }

  

  const fetchEmails= async ()=>{
    const data= await axios.get('http://localhost:3001/formread')
    setDisplay(data.data)

    
  }

  

  
  
  
  
  return (
    <div className="flex flex-col items-center ">
      
          <div className="text-bold text-indigo-700 font-bold pb-4 text-2xl"> Sample Form </div>
          <div className="text-bold text-indigo-700 font-bold pb-4 text-xl">Email Adress</div>
          <div className="pb-4">
            <input name="email address" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" value={email} onChange={handleEmail} type="text" />
          </div>
          <div className="text-bold text-indigo-700 font-bold pb-4 text-xl">Phone Number</div>
        <input name="GPA" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" value={number} onChange={handNumber}  type="text" />
        <div className="text-bold text-indigo-700 font-bold pb-4 pt-3 text-xl">Name</div>
        <input name="GPA" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={name} onChange={handleName}  id="username" type="text" />
        <div className="text-bold text-indigo-700 font-bold pb-4 pt-3 text-xl">Grade</div>
        <input name="GPA" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={grade} onChange={handleGrade}  id="username" type="text" />
        <div className="pt-4">
          <button onClick={sendToData} className="rounded-md bg-indigo-600 text-white w-24">Submit</button>
          <button className='"rounded-md bg-indigo-600 text-white w-24"' onClick={fetchEmails}>click me</button>
        </div>
        
        
          
    </div>
  )
}

export default index