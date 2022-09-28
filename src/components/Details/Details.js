import React from "react";
import Break from "../Break/Break";
import Breaktime from "../Breaktime/Breaktime";
import Exdetails from "../Exdetails/Exdetails";
import Profile from "../Profile/Profile";
import Profileinfo from "../Profileinfo/Profileinfo";
import "./Details.css";

const Details = () => {
  return (
    <div className="details-container p-4">
      <Profile></Profile>
      <Profileinfo></Profileinfo>
      <Break></Break>
      <Exdetails></Exdetails>
      <Breaktime></Breaktime>
      <div className="text-center">
        <button className="btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default Details;
