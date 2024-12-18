import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const navigate=useNavigate();
    const [data,mydata]=useState([]);
    const myEdit=(id)=>{
        navigate(`/edit/${id}`);
    }

    const getdata=()=>{
        let api="http://localhost:3000/Mobile";
        axios.get(api).then((res)=>{
            mydata(res.data);
        })
    }

const ans=data.map((item)=>{
    return(
        <tr>
            <td>{item.company}</td>
            <td>{item.model}</td>
            <td>{item.storage}</td>
            <td >{item.price}</td>
            <td onClick={()=>{myEdit(item.id)}} ><FontAwesomeIcon icon={faPenToSquare} /></td>
            <td onClick={()=>{deldata(item.id)}}><FontAwesomeIcon icon={faTrash} /></td>
        </tr>
    )
})
    useEffect(()=>{
        getdata();
    })
    
    const deldata=(id)=>{
        let api=`http://localhost:3000/Mobiles/${id}`;
        axios.delete(api).then((res)=>{
        message.success("data deleted");
        })
         }

    return(
        <>
        <div id="up">
        <div id="update">
          <Table border={2} width="100%">
      <thead>
        <tr>
          <th>Company</th>
          <th>Model</th>
          <th>Storage</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
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
export default Update;