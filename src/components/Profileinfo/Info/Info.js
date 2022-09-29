import React from "react";

const Info = ({ info, infotype, type }) => {
  return (
    <div>
      <div>
        <p className="font-semibold text-2xl">
          {info}
          <small>{infotype}</small>
        </p>
        <p>
          <small>{type}</small>
        </p>
      </div>
    </div>
  );
};

export default Info;
