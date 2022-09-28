import React from 'react';
import Info from './Info/Info';

const Profileinfo = () => {
    return (
      <div className="flex items-center justify-between border p-4 rounded-lg">
        <Info info={60} infotype={"kg"} type={"Weight"}></Info>
        <Info info={6.5} type={"Height"}></Info>
        <Info info={20} type={"Age"} infotype={"yrs"}></Info>
      </div>
    );
};

export default Profileinfo;