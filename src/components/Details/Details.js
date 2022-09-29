import React, { useState } from "react";
import Break from "../Break/Break";
import Breaktime from "../Breaktime/Breaktime";
import Exdetails from "../Exdetails/Exdetails";
import Profile from "../Profile/Profile";
import Profileinfo from "../Profileinfo/Profileinfo";
import "./Details.css";

const Details = ({ info }) => {
  const [breaks,setBreaks] = useState([]);
  const addBreakTime = (e) => {
    const childrens = e.target && e.target.nodeName === "SPAN";
    if (childrens) {
      setBreaks(e.target.innerText)
    }
  }
  return (
    <div className="details-container p-4">
      <Profile></Profile>
      <Profileinfo></Profileinfo>
      <Break break={addBreakTime}></Break>
      <Exdetails info={info}></Exdetails>
      <Breaktime breaks={breaks}></Breaktime>
      <div className="text-center">
        <button className="btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default Details;
