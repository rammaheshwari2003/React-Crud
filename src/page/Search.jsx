

import { useState } from "react";
import { message } from "antd";
import { Table } from "react-bootstrap";
import axios from "axios";
const Search=()=>{
    const [disdata,setdisdata]=useState([]);
     const [input,setinput]=useState({});

     const handle=(e)=>{     
        let name=e.target.name;     
        let value=e.target.value;     
     setinput(value);
     console.log(input);  
    }
    
    const search=()=>{
        let api=`http://localhost:3000/Mobile/?company=${input}`;
        axios.get(api).then((res)=>{ 
            
            if(res.data.length===0){
                message.error("No data found");
            }

            else{
                message.success("data found");
            setdisdata(res.data);
            }
        })
    }

    const dis=disdata.map((item)=>{
        return(
            <tr>
            <td>{item.company}</td>
            <td>{item.model}</td>
            <td >{item.storage}</td>
            <td >{item.price}</td>
        </tr>
        )
    })
    return(
        <>
        <div className="search">
       <div id="searchinput">
Enter Company Name <input type="text" name="modelin" placeholder="Enter Bike Model" onChange={handle}/> 
           <button onClick={search}>Search</button>
        </div>

            <div id="s-dis">
        <Table border={2} width="100%" >
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Model</th>
          <th>Storage</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody >
        {dis}
      </tbody>
    </Table>
    </div>
    </div>
        </>
    )
}
export default Search;