import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
      <div className="flex items-center text-2xl">
        <FontAwesomeIcon icon={faWalking} />
        <h1 className='ml-2'>Dynamic Technologies</h1>
      </div>
    );
};

export default Header;