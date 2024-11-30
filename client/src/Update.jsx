import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Back from './components/Back'
import axios from 'axios'

const Update = () => {

    const {id} = useParams()

    const navigate = useNavigate()
  const [name,setName] = useState('')
  const [age,setAge] = useState(0)
  const [phone,setPhone] = useState(0)
    useEffect(()=>{
        const getData = async() =>{
            await axios.get('http://localhost:8000/oneUser/'+id)
            .then((result)=>{
              setName(result.data.name)
              setAge(result.data.age)
              setPhone(result.data.phone)
            })
            .catch(err=>console.log(err))
          }
          getData()
    },[])

    const updateUser = async(e) => {
        e.preventDefault()
        await axios.put('http://localhost:8000/updateUser/'+id,{name,age,phone})
        .then(result=>{
            console.log(result);
            navigate('/')
        }).catch(err=>console.log(err.message))
    }
    
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div>
      <Back/>
      </div>
      <div className="w-auto  min-w-[500px] h-auto bg-slate-300 rounded-md shadow-md border border-slate-800 p-5">
        <h1 className='text-center text-3xl text-black font-medium'>Update User</h1>
        <form onSubmit={updateUser}>
            <div className="name">
                <input type="text" id='name' value={name}  placeholder='Enter Your Name' className='w-full px-2 rounded-md h-10 mt-5' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="age">
                <input type="text" id='age' value={age} placeholder='Enter Your Age' className='w-full px-2 rounded-md h-10 mt-5 'onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className="phone">
                <input type="text" id='phone' value={phone} placeholder='Enter Your Phone' className='w-full px-2 rounded-md h-10 mt-5' onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <button type='submit' className='bg-blue-600 px-3 py-2 rounded-md shadow w-full mt-5 hover:bg-green-700 duration-300 cursor-pointer'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update
