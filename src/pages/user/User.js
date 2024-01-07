import { useState } from "react";
import { Input } from "antd";
import Button from "components/button/Button";
import Select from "components/select/Select";
import { SearchOutlined } from "@ant-design/icons";
import { Table } from "antd";
import "./styles.scss";
import useNotify from "hooks/useNotification";
import editIcon from "assets/icons/editIcon.png";

const UserSetting = () => {
  // const { showToastError } = useNotify();
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <div className="tableId">{text}</div>,
    },
    {
      title: "利用者名",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "性別",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "発信機",
      dataIndex: "device",
      key: "device",
    },
    {
      title: "おむつ種類",
      dataIndex: "diaperType",
      key: "diaperType",
    },
    {
      title: "グループ",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "",
      dataIndex: "action",
      width: 100,
      key: "action",
      render: (text, record) => (
        <div className="tableId">
          {text} <img src={editIcon} className="edit-user-icon" />
        </div>
      ),
    },
  ];
  const datas = [
    {
      key: 1,
      id: 1,
      userName: "三和　うめ",
      gender: "女性",
      device: "8C:1F:64:C0:41:94",
      diaperType: "L",
      group: "A",
    },
    {
      key: 2,
      id: 2,
      userName: "三和　うめ",
      gender: "女性",
      device: "8C:1F:64:C0:41:94",
      diaperType: "未設定",
      group: "未設定",
    },
    {
      key: 3,
      id: 3,
      userName: "三和　うめ",
      gender: "女性",
      device: "8C:1F:64:C0:41:94",
      diaperType: "M",
      group: "未設定",
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
  const onAdd = () => {
    // showToastError("aaa");
  };
  return (
    <div className="user-setting-container">
      <div className="user-setting-action-row">
        <div className="user-setting-action-buttons">
          <Button
            key="back"
            text="追加"
            background="#0E6FBA"
            width={100}
            onClick={onAdd}
          />
          <Button key="back" text="削除" background="#FF5757" width={100} />
          <Button key="back" text="登録" background="#F7B52C" width={100} />
          <Button key="back" text="再読込" background="#00BF63" width={100} />
        </div>
        <div className="user-setting-action-search-layout">
          <div className="user-setting-action-filter">
            <Select width={60} value={10} />
            <div className="user-setting-action-filter-label">件表示</div>
          </div>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="検索"
            style={{ width: 300 }}
          />
        </div>
      </div>
      <div className="user-setting-table-layout">
        <Table
          columns={columns}
          dataSource={datas}
          rowSelection={rowSelection}
        />
      </div>
    </div>
  );
};
export default UserSetting;
