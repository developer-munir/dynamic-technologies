import React from 'react';

const Breaktime = ({ breaks }) => {
  return (
    <div>
      <div className="flex items-center justify-between border p-2 my-4 rounded-lg bg-slate-200 font-semibold">
        <h1>Break time</h1>
        <h1>{breaks}</h1>
      </div>
    </div>
  );
};

export default Breaktime;