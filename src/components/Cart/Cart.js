import React from 'react';

const Cart = ({ info }) => {
    const { name,picture,age,time,id } = info;
    return (
      <div data-aos="zoom-in">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <p>For Age: {age}</p>
            <p>Time required : {time}s</p>
            <div className="card-actions">
              <button className="btn btn-primary">Add to list</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;