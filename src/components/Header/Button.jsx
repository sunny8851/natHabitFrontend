import React from "react";

const Button = ({ title, onClick, active }) => {
  return (
    <>
      <button
        type="button"
        className="h-[80px] w-[300px] text-black bg-slate-400 text-xl rounded-2xl border-black border-2"
        onClick={onClick}
        style={{
          backgroundColor: active ? "green": "rgb(148, 163, 184)"
        }}
        >
        {title}
      </button>
          </>
  );
};

export default Button;
