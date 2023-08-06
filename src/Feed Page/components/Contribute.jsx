import React from "react";

const Contribute = ({ onClick }) => {
  return (
    <button
      className="text-white font-semibold bg-primary rounded-2xl py-2"
      onClick={() => onClick(true)}
    >
      Contribute
    </button>
  );
};

export default Contribute;
