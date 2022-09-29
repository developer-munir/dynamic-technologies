import React, { useState } from "react";
import Break from "../Break/Break";
import Breaktime from "../Breaktime/Breaktime";
import Exdetails from "../Exdetails/Exdetails";
import Profile from "../Profile/Profile";
import Profileinfo from "../Profileinfo/Profileinfo";
import "./Details.css";
import Swal from "sweetalert2";

const Details = ({ info }) => {
  const [breaks,setBreaks] = useState([]);
  const addBreakTime = (e) => {
    const childrens = e.target && e.target.nodeName === "SPAN";
    if (childrens) {
      setBreaks(e.target.innerText)
    }
  }
  const activity = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Activity Completed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Completed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  return (
    <div className="details-container p-4">
      <Profile></Profile>
      <Profileinfo></Profileinfo>
      <Break break={addBreakTime}></Break>
      <Exdetails info={info}></Exdetails>
      <Breaktime breaks={breaks}></Breaktime>
      <div className="text-center">
        <button className="btn btn-primary" onClick={activity}>Activity Completed</button>
      </div>
    </div>
  );
};

export default Details;
