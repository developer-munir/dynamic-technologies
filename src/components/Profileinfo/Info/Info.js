import React from "react";

const Info = ({ info, infotype, type }) => {
  return (
    <div>
      <div>
        <p>
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
