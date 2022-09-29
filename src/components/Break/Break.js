import React from 'react';

const Break = (props) => {
    return (
      <div className="my-4">
        <h1 className='text-2xl font-semibold'>Add A Break</h1>
        <div className="flex items-center justify-between border p-2 my-2 rounded-lg" onClick={props.break}>
          <span className="rounded-badge border p-2">10m</span>
          <span className="rounded-badge border p-2">20m</span>
          <span className="rounded-badge border p-2">30m</span>
          <span className="rounded-badge border p-2">40m</span>
          <span className="rounded-badge border p-2">50m</span>
        </div>
      </div>
    );
};

export default Break;