import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";

const Listdata = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata, "getuserdata");

  const getdata = async (e) => {
    const res = await fetch("/getdata", {
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

  useEffect(() => {
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
      getdata();
    }
  }

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add-btn mt-2 mb-2">
          <NavLink to="/register" className="btn btn-primary">
            Add Data
          </NavLink>
        </div>

        <table class="table mt-3">
          <thead>
            <tr className="table-dark">
              <th scope="col">ID</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((element, id) => {
              return (
                <>
                  <tr>
                    <th scope="row">{id + 1}</th>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.work}</td>
                    <td>{element.number}</td>
                    <td className="d-flex justify-content-between">
                      <NavLink to={`view/${element._id}`}>
                     
                        <button className="btn btn-success">
                          <RemoveRedEyeIcon />
                        </button>
                      </NavLink>
                      <NavLink to={`edit/${element._id}`}>
                      <button className="btn btn-primary">
                        <EditIcon />
                      </button>
                      </NavLink>
                      <button className="btn btn-danger" onClick={()=>deleteuser(element._id)}>
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listdata;
