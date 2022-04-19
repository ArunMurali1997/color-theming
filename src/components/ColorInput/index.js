import React from "react";

const ColorInput = ({ onChange, label }) => {
  return (
    <div>
      <input
        type="color"
        value="#6400f0"
        onChange={onChange}
        id="primary-color-input"
      />
      <label for="primary-color-input">{label}</label>
    </div>
  );
};

export default ColorInput;
