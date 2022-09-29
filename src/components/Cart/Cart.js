import React from 'react';

const Cart = ({ info,addtolist }) => {
  const { name, picture, age, time, id } = info;
    return (
      <div data-aos="zoom-in">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={picture} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>
              No matter how busy you may think you are, you must find time for...
            </p>
            <p>For Age: {age}</p>
            <p>Time required : {time}m</p>
            <div className="card-actions">
              <button
                className="btn btn-primary"
                onClick={() => addtolist(info)}
              >
                Add to list
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;