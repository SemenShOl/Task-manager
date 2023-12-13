import React from "react";

const Checkmark = ({ className }) => {
  return (
    <svg
      className={className}
      stroke="#3C6E71"
      fill="white"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="18px"
      width="18px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        fill="none"
        stroke-width="2"
        points="6 13 10.2 16.6 18 7"
      ></polyline>
    </svg>
  );
};
export default Checkmark;
