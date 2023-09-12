import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { toast } from "react-hot-toast"
import { Navigate } from 'react-router-dom';
import axios from "axios"
const Login = () => {
    const { isAuthenticated, setIsAuthenticated } =
    useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const {data}= await axios.post(
        "https://quixiestream-backend.onrender.com/users/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data)
      toast.success(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error("error logging in");
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to="/" />

  return (
    <div className="  flex items-center justify-center">
    <div className="flex justify-center items-center">
     <div className="w-1/3 bg-white p-8 rounded shadow-md">
       <h2 className="text-2xl font-bold mb-4">Login</h2>
       <form onSubmit={submitHandler}>
         <div className="mb-4">
           <label className="block text-sm font-medium mb-1">
             Email
           </label>
           <input
             type="email"
             name="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-400"
           />
         </div>
         <div className="mb-4">
           <label  className="block text-sm font-medium mb-1">
             Password
           </label>
           <input
             type="password"
             name="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-400"
           />
         </div>
         <button
           type="submit"
           className="w-full bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
         >
           Log in
         </button>
       </form>
     </div>
   </div>
  </div>
  )
}

export default Login