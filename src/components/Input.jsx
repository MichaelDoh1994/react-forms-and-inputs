import React from "react";

function Input({ labelText, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{labelText}</label>
      <input id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}

export default Input;
