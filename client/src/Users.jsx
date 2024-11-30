import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { MdOutlineDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";


const Users = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    const getData = async() =>{
      await axios.get('http://localhost:8000/users')
      .then((result)=>{
        setData(result.data)
      })
      .catch(err=>console.log(err))
    }
    getData()
  },[data])


  const deleteUser = async(id) => {
    await axios.delete('http://localhost:8000/deleteUser/'+id)
    .then(result=>console.log(result))
    .catch(err=>console.log(err.message))
  }
  
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <Link to={'/create'} className='bg-green-600 absolute left-10 top-10 px-3 py-2 rounded-md hover:scale-110 duration-300 cursor-pointer transition-all'>Add User</Link>
      <div className='w-auto h-auto bg-slate-300 rounded-md shadow-md border border-slate-800 p-5'>
      <div className='w-full px-6 py-2   flex items-center justify-between  text-slate-800' >
              <div className="name w-20  text-center">ID</div>
              <div className="name w-32 text-center">Name</div>
              <div className="age w-32  text-center">Age</div>
              <div className="phone w-20  text-center">Phone</div>
              <div className="actions w-32 text-end">Actions</div>
          </div>
        {data.map((user,index)=>{
          return <div key={user._id} className='w-full px-6 py-2 rounded shadow bg-gray-700 flex items-center justify-between mt-2'>
              <div className="id w-20 text-center">{index+1}</div>
              <div className="name w-32 text-center">{user.name}</div>
              <div className="age w-32 text-center">{user.age}</div>
              <div className="phone w-20 text-center">{user.phone}</div>
              <div className="btns flex items-center justify-end gap-2 w-32" >
                <Link to={`/update/${user._id}`}><GrUpdate className='size-4 text-blue-600'/></Link>
                <Link onClick={()=>{deleteUser(user._id)}}><MdOutlineDeleteForever className='size-6 text-red-500'/></Link>
              </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Users
