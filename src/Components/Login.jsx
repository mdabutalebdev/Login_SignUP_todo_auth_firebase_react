import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {

  const navigate = useNavigate();
  const [first, setfirst] = useState({email:"",pass:""})

  const login = (e)=>{
    
    e.preventDefault()
  let {email,pass}= first
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        // Signed up 
        const user = res.user;
        
        navigate("/TodoApp")
        // ...
      })
      .catch((error) => {
        
        alert(error.message)
        
      });
  }







  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
    <div className="w-full max-w-md bg-white p-8 rounded shadow-md ">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
     
      <form onSubmit={login} className="space-y-4">

         

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Gmail</label>
          <input
                onChange={(e)=>setfirst((prev) =>({...prev,email:e.target.value}))}
                type="email"
                name="email"
                className="w-full p-2 border-[2px] rounded border-blue-500"
                placeholder="Enter your email"
            
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
                onChange={(e)=>setfirst((prev) =>({...prev,pass:e.target.value}))}
                type="password"
                name="password"
                className="w-full p-2 border-[2px] rounded border-blue-500"
                placeholder="Enter your password"
              
          />
        </div>

        {/* button */}
        <div className="">
       
          <button
               
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-5 mb-5">
         
            Login
          </button>
         
          <div className="flex gap-x-5">
            <h3>Don't have an account ?</h3>
            <Link to={`/SignUp`}> 
              <button type="submit" className="text-blue-700"><a href="#">SignUp</a></button>
            </Link>
           </div>
         
          
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login