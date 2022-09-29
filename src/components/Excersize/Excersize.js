import React from 'react';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Questions from '../Questions/Questions';

const Excersize = (props) => {
    return (
      <div className="p-10">
        <Header></Header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {props.data.map((info) => (
            <Cart info={info} key={info.id} addtolist={props.addtolist}></Cart>
          ))}
        </div>
        <div className='my-4'>
          <Questions></Questions>
        </div>
        <div className="hidden lg:block">
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Excersize;