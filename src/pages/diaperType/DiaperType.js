import { useState } from "react";
import { Input } from "antd";
import Button from "components/button/Button";
import Select from "components/select/Select";
import Color from "components/colorPicker/ColorPicker";
import { SearchOutlined } from "@ant-design/icons";
import { Table } from "antd";
import "./styles.scss";

const DiaperType = () => {
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
      title: "表示色",
      dataIndex: "indicateColor",
      key: "indicateColor",
      render: (text, record) => <Color value={text} disabled={true} />,
    },
    {
      title: "しきい値黄緑",
      dataIndex: "thresholdYellowGreen",
      key: "thresholdYellowGreen",
    },
    {
      title: "しきい値黄",
      dataIndex: "thresholdYellow",
      key: "thresholdYellow",
    },
    {
      title: "しきい値黄",
      dataIndex: "thresholdOrange",
      key: "thresholdOrange",
    },
    {
      title: "しきい値黄",
      dataIndex: "thresholdRed",
      key: "thresholdRed",
    },
  ];
  const datas = [
    {
      key: 1,
      id: 1,
      name: "L",
      indicateColor: "#00BF63",
      thresholdYellowGreen: 300,
      thresholdYellow: 220,
      thresholdOrange: 190,
      thresholdRed: 70,
    },
    {
      key: 2,
      id: 2,
      name: "M",
      indicateColor: "#00BF63",
      thresholdYellowGreen: 200,
      thresholdYellow: 160,
      thresholdOrange: 140,
      thresholdRed: 50,
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
    <div className="diaper-type-container">
      <div className="diaper-type-action-row">
        <div className="diaper-type-action-buttons">
          <Button key="back" text="追加" background="#0E6FBA" width={100} />
          <Button key="back" text="削除" background="#FF5757" width={100} />
          <Button key="back" text="登録" background="#F7B52C" width={100} />
          <Button key="back" text="再読込" background="#00BF63" width={100} />
        </div>
        <div className="diaper-type-action-search-layout">
          <div className="diaper-type-action-filter">
            <Select width={60} value={10} />
            <div className="diaper-type-action-filter-label">件表示</div>
          </div>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="検索"
            style={{ width: 300 }}
          />
        </div>
      </div>
      <div className="diaper-type-table-layout">
        <Table
          columns={columns}
          dataSource={datas}
          rowSelection={rowSelection}
        />
      </div>
    </div>
  );
};
export default DiaperType;
