import React from "react";
import { DatePicker } from "antd";
import "./styles.scss";

const DatePickerComponent = (props) => {
  const { onChange, title, width, placeholder } = props;
  return (
    <div className="datepicker-container">
      {title && <div className="datepicker-title">{title}</div>}
      <DatePicker onChange={onChange} placeholder={placeholder} />
    </div>
  );
};
export default DatePickerComponent;
