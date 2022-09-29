import React from "react";
import assm from "../../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
  return (
    <div className="flex items-center my-4">
      <img className="w-[50px] border-[3px] border-red-800 rounded-full mr-3" src={assm} alt="" />
      <div>
        <h1>Munir Hossain</h1>
        <span>
          <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
        </span>
        <span>Jessore,Bangladesh</span>
      </div>
    </div>
  );
};

export default Profile;
