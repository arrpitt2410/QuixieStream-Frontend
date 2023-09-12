import React, { useState } from 'react'
import axios from 'axios'
import {  toast } from 'react-hot-toast'
import { Navigate } from 'react-router-dom'

const StreamCreate = () => {

    const [ title, setTitle] = useState("")
    const [ description, setDescription] = useState("")
    const [ created , setCreated] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const {data} = axios.post("http://localhost:3000/streams/new",{
            title,description
        },{
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })

          // toast.success(data.message)
          setCreated(true)
        } catch (error) {
            // toast.error(error)
            setCreated(false)
        }
    }

    if(created) return <Navigate to="/stream" />

  return (
    <div className="  flex items-center justify-center">
    <div className="flex justify-center items-center">
     <div className=" bg-white p-8 rounded shadow-md">
       <h2 className="text-2xl font-bold mb-4">Create Stream</h2>
       <form onSubmit={submitHandler}>
         <div className="mb-4">
           <label className="block text-sm font-medium mb-1">
             Title
           </label>
           <input
             type="text"
             name="email"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-400"
           />
         </div>
         <div className="mb-4">
           <label  className="block text-sm font-medium mb-1">
             Description
           </label>
           <input
             type="text"
             name="password"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-400"
           />
         </div>
         <button
           type="submit"
           className="w-full bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
         >
           Create Stream
         </button>
       </form>
     </div>
   </div>
  </div>
  )
}

export default StreamCreate