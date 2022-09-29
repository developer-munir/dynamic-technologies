import React from 'react';

const Exdetails = ({ info }) => {
  let totalTime = 0;
  for (const singleinfo of info) {
    totalTime = totalTime + parseInt(singleinfo.time)
  }
    return (
      <div>
        <h1 className="text-2xl font-semibold">Exercise Details</h1>
        <div className="flex items-center justify-between border p-2 my-4 rounded-lg">
          <h1>Exercise time</h1>
          <h1>{totalTime} seconds</h1>
        </div>
      </div>
    );
};

export default Exdetails;