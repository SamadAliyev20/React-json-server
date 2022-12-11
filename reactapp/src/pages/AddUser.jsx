import axios from 'axios';
import React, { useState } from 'react'

const AddUser = () => {
  const [id,setFin]=useState('');
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');


  const UserHandler = () =>{
  const addUser= async () =>{
    
    await axios.post("http://localhost:3001/posts/",{id,name,phone})
    
  }
  addUser();
  }
  const FinHandler =(e) =>{
    setFin(e.target.value)
  }
  const NameHandler =(e) =>{
    setName(e.target.value)
  }
  const PhoneHandler =(e) =>{
    setPhone(e.target.value)
  }
  return (
    <div>
      <div className="col-lg-5 col-8 mx-auto mt-5">
      <input onChange={FinHandler} className='form-control' type="text" placeholder='FIN Code' />
      <input onChange={NameHandler} className='form-control my-4' type="text" placeholder='FullName...'/>
      <input onChange={PhoneHandler} className='form-control' type="tel" placeholder='Phone...' />
      <button onClick={UserHandler} className='btn btn-lg btn-success fw-bold mt-3 w-100'>ADD STUDENT</button>
      </div>
    </div>
  )
}

export default AddUser