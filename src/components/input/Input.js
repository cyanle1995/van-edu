import React from "react";
import { Input } from "antd";
import "./styles.scss";

const InputComponent = (props) => {
  const {
    value,
    title,
    titleSize,
    subtitle,
    width,
    placeholder,
    onChange,
    type,
    onEnter,
    error,
  } = props;
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
      {title && (
        <div className="input-title" style={{ fontSize: titleSize || 16 }}>
          {title}
        </div>
      )}
      {subtitle && <div className="input-subtitle">{subtitle}</div>}
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
        type={type}
        onKeyUp={onKeyUp}
      />
      {error ? <span className="input-error-message">{error}</span> : null}
    </div>
  );
};
export default InputComponent;
