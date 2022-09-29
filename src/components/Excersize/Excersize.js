import React from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';

const Excersize = (props) => {
    return (
      <div className="p-20">
        <Header></Header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {props.data.map((info) => (
            <Cart info={info} key={info.id} addtolist={props.addtolist}></Cart>
          ))}
        </div>
      </div>
    );
};

export default Excersize;