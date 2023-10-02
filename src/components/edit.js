import React, { useState, useEffect } from 'react'
import { NavLink, useParams, useHistory } from 'react-router-dom'

const Edit = () => {

  
  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  const history = useHistory("");

    const [inpval, setInp] = useState ({
        name:"",
        email:"",
        age:"",
        number:"",
        work: "",
        add: "",
        desc:"",
      })
    
      const setdata = (e) => {
        console.log(e.target.value  );
        const {name,value} = e.target;
        setInp ((preval) =>{ 
          return {
            ...preval,
            [name]: value
          }
        
      })}

      const {id} = useParams("");
      console.log(id)
    
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
          setInp(data);
          console.log("get data");
        }
      };

      useEffect(() =>{
        getdata();
      }, []);
    
 
      const updateuser = async (e) =>{
        e.preventDefault();
        
        const {name,email,age,number,work,add,desc} = inpval

        const res2 = await fetch (`/updateuser/${id}`,{
         method:"PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            name,email,age,number,work,add,desc
          })

        });

        const data2 = await res2.json();
        console.log(data2)

        if(res2.status === 422 || !data2){
          alert("fill the data")
        }else{
          alert("data added")
          history.push("/")
        }
      }

  return (
    <div className='container'>
      <NavLink to="/">Home1</NavLink>

      <form className='mt-4'>
        <div className='row'>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" value={inpval.name} onChange={setdata}  name='name' className="form-control" id="exampleInputPassword1" />
  </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={inpval.email} onChange={setdata}  name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">age</label>
    <input type="age" value={inpval.age} onChange={setdata} name='age' className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Phone</label>
    <input type="number" value={inpval.number} onChange={setdata} name='number' className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">work</label>
    <input type="text" value={inpval.work} onChange={setdata}  name='work' className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" value={inpval.add} onChange={setdata} name='add' className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 col-lg-12 col-md-12 col-12">
    <label for="exampleInputPassword1" className="form-label">Description</label>
      <textarea    name='desc' value={inpval.desc} onChange={setdata} className='form-control' id='' cols="30" rows="5" />
  </div>

  

       

  <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
</div>
</form>
    </div>
  )
}

export default Edit