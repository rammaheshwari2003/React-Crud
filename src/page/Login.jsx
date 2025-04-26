import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [input, setInput]=useState({});
    const navigate=useNavigate();

    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setInput(values=>({...values, [name]:value}));
    }

    const handlesubmit=()=>{
        let api=`http://localhost:3000/User/?email=${input.email}&password=${input.password}`;
        axios.get(api).then((res)=>{
            if(res.data.length===0){
                message.error("Invalid Email or Password !!!");
            }
            else{
                message.success("Login Successfull");
                localStorage.setItem("name",res.data[0].name);
               navigate("/home")
            }
        })
    
    }
    
    
    return(
        <>
            <div id="box-login">
                <div id="login">
                    <h1>Login</h1> <hr /> <br />
                    Enter Email <input type="text" name="email" value={input.email} onChange={handleinput} placeholder="Email" required/> <br />
                    Enter Password <input type="text" name="password" value={input.password} onChange={handleinput} placeholder="Password" required/> <br />
                    <button onClick={handlesubmit}>Sign In</button>
                    <div id="log">
                    {/* <button onClick={()=>navigate("/register")} >Register</button> */}
                    <h4 onClick={()=>navigate("/register")}>Sign Up</h4> |
                    <h5>Forgot Password</h5>
                    
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Login;