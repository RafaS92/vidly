import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
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
      />
      {error && (
        <div className="alert alert-danger " role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
