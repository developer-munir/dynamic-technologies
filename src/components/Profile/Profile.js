import React from "react";
import assm from "../../images/mypic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationPin } from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
  return (
    <div className="flex items-center my-4">
      <img className="w-[70px] h-[70px]  rounded-[50%] mr-3" src={assm} alt="" />
      <div>
        <h1 className="text-xl font-semibold">Munir Hossain</h1>
        <span>
          <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
        </span>
        <span className="ml-1">Jessore, Bangladesh</span>
      </div>
    </div>
  );
};

export default Profile;
