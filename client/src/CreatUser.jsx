import React, { useState } from 'react'
import axios from 'axios'
import Back from './components/Back'
import { useNavigate } from 'react-router-dom'
const CreatUser = () => {
  const navigate = useNavigate()
  const [name,setName] = useState('')
  const [age,setAge] = useState(0)
  const [phone,setPhone] = useState(0)

  const addUser = async(e) =>{
    e.preventDefault()
    axios.post('http://localhost:8000/createUser',{name,age,phone})
    .then((result)=>{
      console.log(result)
      navigate('/')
    })
    .catch(err=>console.log(err.message))

    
  }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div>
      <Back/>
      </div>
      <div className="w-auto  min-w-[500px] h-auto bg-slate-300 rounded-md shadow-md border border-slate-800 p-5">
        <h1 className='text-center text-3xl text-black font-medium'>Create User</h1>
        <form onSubmit={addUser}>
            <div className="name">
                <input type="text" id='name'  placeholder='Enter Your Name' className='w-full px-2 rounded-md h-10 mt-5' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="age">
                <input type="text" id='age'  placeholder='Enter Your Age' className='w-full px-2 rounded-md h-10 mt-5 'onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className="phone">
                <input type="text" id='phone'  placeholder='Enter Your Phone' className='w-full px-2 rounded-md h-10 mt-5' onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <button type='submit' className='bg-green-600 px-3 py-2 rounded-md shadow w-full mt-5 hover:bg-green-700 duration-300 cursor-pointer'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default CreatUser
