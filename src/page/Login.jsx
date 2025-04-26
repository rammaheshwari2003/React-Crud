import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const [input,setinput]=useState({});
    const navigate=useNavigate();


    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        
        setinput(values=>({...values,[name]:value}));
        }


    const handlesubmit=()=>{
    let api="http://localhost:3000/User";
    axios.get(api,input).then((res)=>{
        message.success("Login Successfull");
        navigate("/home")
    })
   
}
    return(
   <>
    <div id="box-res">
   <div id="login">

<h1>Login</h1> <hr />
Enter Email <input type="text" placeholder="Email" name="email" value={input.email} onChange={handleinput} required/> <br />
Enter Password <input type="text" placeholder="Password" name="password" value={input.password} onChange={handleinput} required/> <br />
<button onClick={handlesubmit}>Sign In</button>
<h4>New Account : <span onClick={()=>{navigate("/register")}}>Sign Up</span></h4>
   </div>
   </div>
   </>
    )
}
export default Login;