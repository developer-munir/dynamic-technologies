import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import Excersize from "../Excersize/Excersize";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState([]);
  const [addlist,setaddList] =useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
  const addToList = (info) => {
    // console.log('clicked', info)
    const newInfo = [...addlist,info]
    setaddList(newInfo);
  }
  return (
    <div>
      <div className="container-main">
        <div>
          <Excersize data={data} addtolist={addToList}></Excersize>
        </div>
        <div className="bg-slate-500">
          <Details info={addlist}></Details>
        </div>
      </div>
    </div>
  );
};

export default Main;
