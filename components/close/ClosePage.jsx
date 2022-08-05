import React from "react";

function ClosePage({ closeFunction }) {
  return (
    <div
      className="close-page-container"
      onClick={() => {
        closeFunction();
      }}
    ></div>
  );
}

export default ClosePage;
