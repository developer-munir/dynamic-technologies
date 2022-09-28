import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import Excersize from "../Excersize/Excersize";
import "./Main.css";

const Main = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
  return (
    <div>
      <div className="container-main">
        <div>
          <Excersize data = {data}></Excersize>
        </div>
        <div className="bg-slate-500">
          <Details></Details>
        </div>
      </div>
    </div>
  );
};

export default Main;
