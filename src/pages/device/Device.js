import { useState } from "react";
import { Input } from "antd";
import Button from "components/button/Button";
import Select from "components/select/Select";
import { SearchOutlined } from "@ant-design/icons";
import { Table } from "antd";
import "./styles.scss";

const Devices = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text, record) => <div className="tableId">{text}</div>,
    },
    {
      title: "デバイスアドレス",
      dataIndex: "deviceAddress",
      key: "deviceAddress",
    },
    {
      title: "有効",
      dataIndex: "valid",
      key: "valid",
    },
    {
      title: "デバイス名",
      dataIndex: "deviceName",
      key: "deviceName",
    },
    {
      title: "最終受信日時",
      dataIndex: "lastReceivedTime",
      key: "lastReceivedTime",
    },
  ];
  const datas = [
    {
      key: 1,
      id: 1,
      deviceAddress: "8C:1F:64:C0:41:94",
      valid: "有効",
      deviceName: "SWL-009ｃ",
      lastReceivedTime: "2023-05-29 03:56:06.407926",
    },
    {
      key: 2,
      id: 2,
      deviceAddress: "8C:1F:64:C0:41:94",
      valid: "有効",
      deviceName: "SWL-009ｃ",
      lastReceivedTime: "2023-05-29 03:56:06.407926",
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
    <div className="device-container">
      <div className="device-action-row">
        <div className="device-action-buttons">
          <Button key="back" text="追加" background="#0E6FBA" width={100} />
          <Button key="back" text="削除" background="#FF5757" width={100} />
          <Button key="back" text="登録" background="#F7B52C" width={100} />
          <Button key="back" text="再読込" background="#00BF63" width={100} />
        </div>
        <div className="device-action-search-layout">
          <div className="device-action-filter">
            <Select width={60} />
            <div className="device-action-filter-label">件表示</div>
          </div>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="検索"
            style={{ width: 300 }}
          />
        </div>
      </div>
      <div className="device-table-layout">
        <Table
          columns={columns}
          dataSource={datas}
          rowSelection={rowSelection}
        />
      </div>
    </div>
  );
};
export default Devices;
