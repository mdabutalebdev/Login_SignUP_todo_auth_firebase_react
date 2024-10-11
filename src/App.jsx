import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import TodoApp from "./Components/TodoApp";
 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        
        <Route path="/" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/TodoApp" element={<TodoApp />}/>
        <Route path="*" element={<Error/>}/>
      
    </Route>
));


function App() {
  return (
     <>  
     <RouterProvider router={router}/>
     
     </>
   
  );
}

export default App;
