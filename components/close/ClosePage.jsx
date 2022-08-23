import React from "react";

function ClosePage({ closeFunction, customClass}) {
  return (
    <div
      className={`close-page-container ${customClass}`}
      onClick={() => {
        closeFunction();
      }}
    ></div>
  );
}

export default ClosePage;
