import React, { useState } from 'react'
import { NavLink ,useHistory} from 'react-router-dom'

const Register = () => {

   const history = useHistory();

   const [query, setQuery] = useState("")

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

  const addinpdata = async(e) => {

    e.preventDefault();

    const {name,email,age,number,work,add,desc} =inpval;

    const res = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,age,number,work,add,desc

      })
  });

  const data = await res.json();
  console.log(data);

  if(res.status === 422 || !data){
    alert("error");
    console.log("error");

  }else{
    alert("data added");
    history.push("/")
    console.log("data added");
  }

  }

  return (
    <>
    <div className='container'>
      <NavLink to="/">Home</NavLink>

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

  

       

  <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
</div>
</form>
    </div>
    </>
  )
}

export default Register