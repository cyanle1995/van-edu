import { useState } from "react";
import { Input } from "antd";
import Button from "components/button/Button";
import Select from "components/select/Select";
import { SearchOutlined } from "@ant-design/icons";
import { Table } from "antd";
import addIcon from "assets/icons/addIcon.png";
import "./styles.scss";

const GroupSetting = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text, record) => <div className="tableId">{text}</div>,
    },
    {
      title: "グループ名",
      dataIndex: "groupName",
      key: "groupName",
    },
    {
      title: "担当者名",
      dataIndex: "picName",
      key: "picName",
      render: (text, record) => (
        <div className="tableId">
          {text} <img src={addIcon} className="add-pic-icon" />
          <span className="add-pic-text">担当者追加</span>
        </div>
      ),
    },
  ];
  const datas = [
    {
      key: 1,
      id: 1,
      groupName: "A",
      picName: "鈴木",
    },
    {
      key: 2,
      id: 2,
      groupName: "B",
      picName: "鈴木",
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className="group-setting-container">
      <div className="group-setting-action-row">
        <div className="group-setting-action-buttons">
          <Button key="back" text="追加" background="#0E6FBA" width={100} />
          <Button key="back" text="削除" background="#FF5757" width={100} />
          <Button key="back" text="登録" background="#F7B52C" width={100} />
          <Button key="back" text="再読込" background="#00BF63" width={100} />
        </div>
        <div className="group-setting-action-search-layout">
          <div className="group-setting-action-filter">
            <Select width={60} value={10} />
            <div className="group-setting-action-filter-label">件表示</div>
          </div>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="検索"
            style={{ width: 300 }}
          />
        </div>
      </div>
      <div className="group-setting-table-layout">
        <Table
          columns={columns}
          dataSource={datas}
          rowSelection={rowSelection}
        />
      </div>
    </div>
  );
};
export default GroupSetting;
