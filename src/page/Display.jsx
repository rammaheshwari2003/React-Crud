import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";


const Display=()=>{
    const [data, SetMyData]=useState([]);

    const getdata=()=>{
        let api="http://localhost:3000/Mobile";
        axios.get(api).then((res)=>{
            SetMyData(res.data);
        })
    }
useEffect(()=>{
    getdata();
},[])

const ans=data.map((item)=>{
    return(
        <tr>
            <td>{item.company}</td>
            <td>{item.model}</td>
            <td>{item.storage}</td>
            <td>{item.price}</td>
        </tr>
    )
})
return(
    <>
    <div id="d">
    <div id="display">
    <Table border={2} width="100%">
  <thead>
    <tr>
      <th>Company Name</th>
      <th>Model</th>
      <th>Storage</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody >
    {ans}
  </tbody>
</Table>
</div>
</div>
    </>
    )
}
export default Display;