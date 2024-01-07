import { useState } from "react";
import InputComponent from "components/input/Input";
import { Input } from "antd";
import Button from "components/button/Button";
import Select from "components/select/Select";
import { SearchOutlined } from "@ant-design/icons";
import { Table } from "antd";
import editIcon from "assets/icons/editIcon.png";
import Modal from "components/modal/Modal";
import "./styles.scss";

const Pic = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text, record) => <div className="tableId">{text}</div>,
    },
    {
      title: "担当者名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "",
      dataIndex: "action",
      width: 100,
      key: "action",
      render: (text, record) => (
        <div className="tableId">
          {text}{" "}
          <img
            src={editIcon}
            className="edit-pic-icon"
            onClick={() => onShowEdit(record)}
          />
        </div>
      ),
    },
  ];
  const datas = [
    {
      key: 1,
      id: 1,
      name: "鈴木　A",
    },
    {
      key: 2,
      id: 2,
      name: "鈴木　B",
    },
    {
      key: 3,
      id: 3,
      name: "鈴木　C",
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [editPicName, setEditPicName] = useState("");
  const onShowEdit = (record) => {
    const foundPic = datas.find((item) => item.id === record.id);
    if (foundPic) setEditPicName(foundPic.name);
    setShowModalEdit(true);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const onEditPic = () => {
    setShowModalEdit(false);
  };
  const modalEdit = () => {
    return (
      <div className="form-edit-pic">
        <div className="pic-action-row">
          <div className="form-edit-pic-id">ID: 1</div>
          <InputComponent
            width={"100%"}
            value={editPicName}
            onChange={(e) => setEditPicName(e)}
          />
        </div>
        <Button
          key="back"
          text="OK"
          background="#0E6FBA"
          className="edit-pic-button"
          width={200}
          onClick={onEditPic}
        />
      </div>
    );
  };
  return (
    <div className="pic-container">
      <div className="pic-action-row">
        <div className="pic-action-buttons">
          <Button key="back" text="削除" background="#FF5757" width={100} />
          <Button key="back" text="再読込" background="#00BF63" width={100} />
        </div>
        <div className="pic-action-search-layout">
          <div className="pic-action-filter">
            <Select width={60} value={10} />
            <div className="pic-action-filter-label">件表示</div>
          </div>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="検索"
            style={{ width: 300 }}
          />
        </div>
      </div>
      <div className="pic-table-layout">
        <Table
          columns={columns}
          dataSource={datas}
          rowSelection={rowSelection}
        />
      </div>
      <Modal
        showModal={showModalEdit}
        content={modalEdit()}
        onCancel={() => setShowModalEdit(false)}
        title=""
        footer={[]}
        closeIcon={false}
      />
    </div>
  );
};
export default Pic;
