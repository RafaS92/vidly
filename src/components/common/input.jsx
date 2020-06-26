import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        type="text"
        className="form-control"
        id={name}
        name={name}
        aria-describedby="emailHelp"
      />
    </div>
  );
};

export default Input;
