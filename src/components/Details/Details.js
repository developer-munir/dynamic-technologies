import React, { useState } from "react";
import Break from "../Break/Break";
import Breaktime from "../Breaktime/Breaktime";
import Exdetails from "../Exdetails/Exdetails";
import Profile from "../Profile/Profile";
import Profileinfo from "../Profileinfo/Profileinfo";
import "./Details.css";

const Details = ({ info }) => {
  const [] = useState([]);
  const addBreakTime = () => {
    console.log('breaktime')
  }
  return (
    <div className="details-container p-4">
      <Profile></Profile>
      <Profileinfo></Profileinfo>
      <Break break={addBreakTime}></Break>
      <Exdetails info={info}></Exdetails>
      <Breaktime></Breaktime>
      <div className="text-center">
        <button className="btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default Details;
