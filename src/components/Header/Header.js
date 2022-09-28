import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="flex items-center text-2xl">
        <FontAwesomeIcon icon={faWalking} />
        <h1 className="ml-2">Dynamic Technologies</h1>
      </div>
      <p className='text-xl font-semibold mt-4'>Select today’s exercise</p>
    </div>
  );
};

export default Header;