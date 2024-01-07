import React from "react";
import { Select } from "antd";
import "./styles.scss";

const SelectComponent = (props) => {
  const { value, options, onChange, title, placeholder, width, mode } = props;
  return (
    <div className="select-container">
      {title && <div className="select-title">{title}</div>}
      <Select
        defaultValue=""
        mode={mode}
        style={{ width: width || "100%" }}
        onChange={onChange}
        value={value}
        options={options}
        placeholder={placeholder ? placeholder : "選択"}
      />
    </div>
  );
};
export default SelectComponent;
