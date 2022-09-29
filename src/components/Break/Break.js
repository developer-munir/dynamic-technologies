import React from 'react';

const Break = (props) => {
    return (
      <div className="my-4">
        <h1 className='text-2xl font-semibold'>Add A Break</h1>
        <div className="flex items-center justify-between border p-2 my-2 rounded-lg bg-slate-200" onClick={props.break}>
          <span className="rounded-badge border p-2 bg-white cursor-pointer">10m</span>
          <span className="rounded-badge border p-2 bg-white cursor-pointer">20m</span>
          <span className="rounded-badge border p-2 bg-white cursor-pointer">30m</span>
          <span className="rounded-badge border p-2 bg-white cursor-pointer">40m</span>
          <span className="rounded-badge border p-2 bg-white cursor-pointer">50m</span>
        </div>
      </div>
    );
};

export default Break;