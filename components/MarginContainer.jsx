import Head from "next/head";
import React from "react";
function MarginContainer({ children }) {
  return (
    <>
      <div className="margin-container">{children}</div>
    </>
  );
}

export default MarginContainer;
