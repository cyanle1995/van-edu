import React from "react";
import { Input } from "antd";
import "./styles.scss";

const InputComponent = (props) => {
  const { value, width, placeholder, onChange, type, onEnter } = props;
  const onKeyUp = (e) => {
    if (e.code === "Enter" && onEnter) {
      onEnter();
    }
  };
  const onChangeInput = (value) => {
    if (onChange) onChange(value);
  };
  return (
    <div className="input-container" style={{ width: width || "100%" }}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
        type={type}
        onKeyUp={onKeyUp}
        style={{
          width: 50,
          height: 50,
          textAlign: "center",
        }}
      />
    </div>
  );
};
export default InputComponent;
