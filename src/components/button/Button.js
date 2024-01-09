import React from "react";
import { Button } from "antd";
import "./styles.scss";

const ButtonComponent = (props) => {
  const {
    text,
    onClick,
    color,
    shape,
    styles,
    background,
    borderColor,
    textColor,
    disabled,
    className,
    width,
    style,
    type,
  } = props;
  return (
    <Button
      htmlType={type}
      defaultColor={color}
      shape={shape}
      styles={styles}
      onClick={onClick}
      type="primary"
      disabled={disabled}
      className={className}
      style={{
        ...style,
        background: background,
        borderColor: borderColor,
        width: width,
      }}
    >
      <span className="button-text" style={{color: textColor ? textColor : ''}}>{text}</span>
    </Button>
  );
};
export default ButtonComponent;
