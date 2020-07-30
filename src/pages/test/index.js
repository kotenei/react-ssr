import React from "react";

const Test = (props) => {
  const onClick = () => {
    alert("Hello");
  };

  return (
    <div>
      Test <button onClick={onClick}>click</button>
    </div>
  );
};

export default Test;
