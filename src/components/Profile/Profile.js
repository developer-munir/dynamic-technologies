import React from "react";
import assm from "../../images/mypic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
  return (
    <div className="flex items-center my-4">
      <img className="w-[50px] h-[50px] border-2 border-slate-200 rounded-[50%] mr-3" src={assm} alt="" />
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
