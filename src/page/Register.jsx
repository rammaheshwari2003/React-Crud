import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register=()=>{
    const [input,setinput]=useState({});
    const navigate=useNavigate();

    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        
        setinput(values=>({...values,[name]:value}));
        }


    const handlesubmit=()=>{
    let api="http://localhost:3000/User";
    axios.post(api,input).then((res)=>{
        message.success("data inserted");
        navigate("/login")
    })
    }
    return(
   <>
    <div id="box-res">
   <div id="register">

<h1>Register</h1> <hr />
Enter User Name <input type="text" placeholder="User Name" name="name" value={input.name} onChange={handleinput} required/> <br />
Enter Email <input type="text" placeholder="Email" name="email" value={input.email} onChange={handleinput} required/> <br />
Enter Password <input type="text" placeholder="Password" name="password" value={input.password} onChange={handleinput} required/> <br />
<button onClick={handlesubmit}>Sign Up</button>
<h4>Already Account : <span onClick={()=>{navigate("/login")}}>Sign In</span></h4>
   </div>
   </div>
   </>
    )
}
export default Register;