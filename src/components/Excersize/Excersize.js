import React from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';

const Excersize = (props) => {
    
    // console.log(props.data)
    return (
      <div className="p-20">
        <Header></Header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {props.data.map((info) => (
            <Cart info={info} key={info.id}></Cart>
          ))}
        </div>
      </div>
    );
};

export default Excersize;