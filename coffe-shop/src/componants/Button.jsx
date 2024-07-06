import React from "react";

function Button({ title, Click, classes }) {
  return (
    <button
    onClick={Click}
    className={`${classes}`}>
    {title}
    </button>
  );
}

export default Button;
