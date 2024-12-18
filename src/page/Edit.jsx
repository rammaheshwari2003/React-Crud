import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
const Edit=()=>{
const [mydata, setMydata]=useState({});
const {id} =useParams();
const loadData=()=>{
    let api=`http://localhost:3000/Mobile/${id}`;
    axios.get(api).then((res)=>{
        setMydata(res.data);
        console.log(res.data);
    })
}
useEffect(()=>{
    loadData();
}, []);

const handleInput=(e)=>
{ 
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values, [name]:value}))
      console.log(mydata);
}


const handleSubmit=()=>{
    let api=`http://localhost:3000/Mobile/${id}`;
    axios.put(api, mydata).then((res)=>{
        message.success("Data succesflly updated!!!");
    })
}

   

    return(
        <>
        <div id="i">
        <div id="insert">
        Enter Company Name <input type="text" name="make" value={mydata.company} onChange={handleInput} placeholder="Enter Company Name"/> <br />
        Enter Model <input type="text" name="model" value={mydata.model} onChange={handleInput} placeholder="Enter Model" /> <br />
        Enter Storage <input type="text"  name="year" value={mydata.storage} onChange={handleInput} placeholder="Enter Storage"/> <br />
        Enter Price <input type="text"  name="price" value={mydata.price} onChange={handleInput} placeholder="Enter Price"/> <br />
        <button onClick={handleSubmit}>Update</button>
        </div>
        </div>
        </>
    )
}

export default Edit;