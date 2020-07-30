import React from "react";

const NotFound = (props) => {

  if (props.staticContext) {
    props.staticContext.status = 404;
  }

  return (
    <div>
      <h1>404 : Not Found</h1>
    </div>
  );
};

export default NotFound;
