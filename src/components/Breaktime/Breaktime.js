import React from 'react';

const Breaktime = ({ breaks }) => {
  console.log(breaks)
  return (
    <div>
      <div className="flex items-center justify-between border p-2 my-4 rounded-lg">
        <h1>Break time</h1>
        <h1>{breaks} seconds</h1>
      </div>
    </div>
  );
};

export default Breaktime;