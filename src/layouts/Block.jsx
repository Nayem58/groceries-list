import React from "react";

function Block({ children }) {
  return (
    <div className="py-50px">
      <div className="container">{children}</div>
    </div>
  );
}

export default Block;