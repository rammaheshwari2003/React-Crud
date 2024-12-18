import { message } from "antd";
import axios from "axios";
import { useState } from "react";
const Insert=()=>{
    const [input,setinput]=useState({});

const handle=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    

    setinput(values=>({
        ...values,[name]:value
    }));

    
}

const submit=(e)=>{
  let api="http://localhost:3000/Mobile";
  axios.post(api,input).then((res)=>{
      message.success("data inserted")
  })

  input.value="";
}
    return(
        <>
        <div id="i">
        <div id="insert">
           Enter Company Name  <br />
           <input type="text" placeholder="e.g. apple,samsung, xiomi" name="company" onChange={handle}/> 
           <br />
           Enter Model  
           <br />
           <input type="text" placeholder="e.g. i-13,note-9" name="model" onChange={handle}/> 
           <br />
           Enter Storage
           <br />
           <input type="text"  placeholder="e.g. 4-64,6-128" name="storage" onChange={handle}/> 
           <br />
           Enter Price 
           <br />
           <input type="text" placeholder="e.g. 12999, 15999" name="price" onChange={handle}/> 
           <br />
           
           <button onClick={submit}>Insert</button>
        </div>
        </div>
        </>
    )
}
export default Insert;