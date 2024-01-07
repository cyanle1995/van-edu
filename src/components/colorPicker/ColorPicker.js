import React from "react";
import { ColorPicker } from "antd";
const Color = (props) => {
  const { value, disabled } = props;
  return <ColorPicker value={value} disabled={disabled} />;
};
export default Color;
