import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { db } from '../Firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




const SignUp = () => {

 const navigate = useNavigate();
 const [first, setfirst] = useState({name:"",email:"",phn:"",pass:""})
 const [extValue, setextValue] = useState("")

 let {name,email,phn,pass}= first
 const handleSubmit = (e) =>{
  
   e.preventDefault()
  
   if (!name || !email || !phn || !pass) {
    setextValue("fill in all fields")
    return;
   }
   else{
    setextValue("")
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        // Signed up 
        const user = res.user;
        const localId = res.user.reloadUserInfo.localId
        
       
        set(ref(db, 'users/' + localId), {
          username: name,
          email: email,
          password:pass,
        });

        navigate("/")
        // ...
      })
      .catch((error) => {
        
        alert(error.message)
        
      });
  
   }
    
 }
  






// console.log(first)
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
    <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">SignUp</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
                onChange={(e)=>setfirst((prev) =>({...prev,name:e.target.value}))}
                type="text"
                name="name"
                className="w-full p-2 border-[2px] border-blue-500 rounded"
                placeholder="Enter your name"
            
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
          <input
                onChange={(e)=>setfirst((prev) =>({...prev,phn:e.target.value}))}
                type="tel"
                name="phone"
                className="w-full p-2 border-[2px] border-blue-500 rounded"
                placeholder="Enter your phone number"
          
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Gmail</label>
          <input
                onChange={(e)=>setfirst((prev) =>({...prev,email:e.target.value}))}
                type="email"
                name="email"
                className="w-full p-2 border-[2px]  rounded border-blue-500"
                placeholder="Enter your email"
            
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 border-blue-500">Password</label>
          <input
                onChange={(e)=>setfirst((prev) =>({...prev,pass:e.target.value}))}
                type="password"
                name="password"
                className="w-full p-2 border-[2px] rounded border-blue-500"
                placeholder="Enter your password"
              
          />
        </div>

        {/*Button */}
        <h3 className='text-red-500 font-medium'>{extValue}</h3>
        <div className="text-center flex">
          <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
         
           Create acount
          </button>
          <div className="flex gap-x-5">
             
            <Link to={`/`}> 
              <button type="submit" className="text-blue-700"><a href="#">Login</a></button>
            </Link>
           </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignUp