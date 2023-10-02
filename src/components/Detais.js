import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams,useHistory,NavLink } from 'react-router-dom';

const Detais = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const {id} = useParams("");
  console.log(id)

  const history = useHistory();

  const getdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("error");
      console.log("error");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() =>{
    getdata();
  }, []);

  const deleteuser = async (id) =>{
    
    const res2 = await fetch(`/deleteuser/${id}`,{
      method: "DELETE",
      headers:{
        "content-Type": "application/json"
      }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if(res2.status === 422 || !deletedata){
      console.log("error");

    }else{
      console.log("user deleted")
      history.push("/")
    }
  }

  return (
   <>
    <div className='container mt-3'>
        <h1>Edit </h1>
         

        <Card sx={{ maxWidth: 600 } }>
      <CardContent> 
      <div className='btn_add d-flex justify-content-end'>
         <NavLink to={`/edit/${getuserdata._id}`}> <button className='btn btn-primary mx-3'><EditIcon/></button> </NavLink> 
          <button className='btn btn-danger' onClick={()=>deleteuser(getuserdata._id)}><DeleteIcon/></button>
          </div>
        <div className='row'>
 
        <div className='view_flex col-lg-6 col-md-6 col-12'>
        <img src='/th (1).jpeg' style={{width:50}} alt='profile' />
        <h3 className='mt-2  '>Name :<span style={{fontWeight:400}}>{getuserdata.name}</span></h3>
        <h3 className='mt-2'>Age : <span style={{fontWeight:400}}>{getuserdata.age}</span></h3>
        <h3 className='mt-2'>number : <span style={{fontWeight:400}}>{getuserdata.number}</span></h3>
        <h3 className='mt-2'>Address : <span style={{fontWeight:400}}>{getuserdata.add}</span></h3>


        </div>
        <div className='right_flex col-lg-6 col-md-6 col-12'>

        <h3 className='mt-2'>Age : <span style={{fontWeight:400}}>21</span></h3>
        <h3 className='mt-2'>number : <span style={{fontWeight:400}}>871852665</span></h3>
        <h3 className='mt-2'>Address : <span style={{fontWeight:400}}>indore</span></h3>


        </div>
        </div>
       </CardContent>
      </Card>
     

    </div>
   </>
  )
}

export default Detais