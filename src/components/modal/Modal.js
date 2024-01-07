import React from "react";
import { Modal } from "antd";
const ModalComponent = (props) => {
  const {
    title,
    showModal,
    content,
    onOk,
    onCancel,
    width,
    footer,
    closeIcon,
  } = props;

  return (
    <>
      <Modal
        title={title}
        centered
        open={showModal}
        onOk={onOk}
        onCancel={onCancel}
        width={width || 800}
        footer={footer}
        closeIcon={closeIcon}
      >
        {content}
      </Modal>
    </>
  );
};
export default ModalComponent;
