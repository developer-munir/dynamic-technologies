import React from 'react';

const Exdetails = ({ info }) => {
  let totalTime = 0;
  for (const singleinfo of info) {
    totalTime = totalTime + parseInt(singleinfo.time)
  }
    return (
      <div>
        <h1 className="text-2xl font-semibold">Study Details</h1>
        <div className="flex items-center justify-between border p-2 my-4 rounded-lg bg-slate-200 font-semibold">
          <h1>Study time</h1>
          <h1>{totalTime} minutes</h1>
        </div>
      </div>
    );
};

export default Exdetails;