import React from 'react';

const Break = (props) => {
    return (
      <div className="my-4">
        <h1 className='text-2xl font-semibold'>Add A Break</h1>
        <div className="flex items-center justify-between border p-2 my-2 rounded-lg" onClick={props.break}>
          <span className="rounded-badge border p-2">10s</span>
          <span className="rounded-badge border p-2">20s</span>
          <span className="rounded-badge border p-2">30s</span>
          <span className="rounded-badge border p-2">40s</span>
          <span className="rounded-badge border p-2">50s</span>
        </div>
      </div>
    );
};

export default Break;