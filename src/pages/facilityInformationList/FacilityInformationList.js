import { useState } from "react";
import { Input } from "antd";
import Button from "components/button/Button";
import Select from "components/select/Select";
import { SearchOutlined } from "@ant-design/icons";
import { Table } from "antd";
import editIcon from "assets/icons/editIcon.png";
import Modal from "components/modal/Modal";
import FacilityInformation from "pages/facilityInformationAdmin/FacilityInformation";
import "./styles.scss";

const FailityList = () => {
  const columns = [
    {
      title: "No.",
      dataIndex: "No",
      key: "No",
      render: (text, record) => <div className="tableId">{text}</div>,
    },
    {
      title: "施設名",
      dataIndex: "facilityName",
      key: "facilityName",
    },
    {
      title: "事業者ID",
      dataIndex: "businessId",
      key: "businessId",
    },
    {
      title: "登録メールアドレス",
      dataIndex: "email",
      width: 300,
      key: "email",
    },
    {
      title: "施設住所",
      dataIndex: "facilityAddress",
      key: "facilityAddress",
    },
    {
      title: "登録提携先",
      dataIndex: "registeredPartner",
      key: "registeredPartner",
    },
    {
      title: "備考",
      dataIndex: "remarks",
      key: "remarks",
    },
    {
      title: "",
      dataIndex: "action",
      width: 100,
      key: "action",
      render: (text, record) => (
        <div className="tableId" onClick={() => onEdit(record)}>
          {text} <img src={editIcon} className="edit-facility-icon" />
        </div>
      ),
    },
  ];
  const datas = [
    {
      key: 1,
      No: 1,
      facilityName: "ABC苑",
      businessId: "12345",
      email: "kaigo-plus@sanwajp-group.com",
      facilityAddress: "東京都港区新橋2-20-15",
      registeredPartner: "B株式会社",
      remarks: "",
    },
    {
      key: 2,
      No: 2,
      facilityName: "DEF苑",
      businessId: "22222",
      email: "kaigo-plus@sanwajp-group.com",
      facilityAddress: "東京都港区新橋2-20-15",
      registeredPartner: "B株式会社",
      remarks: "",
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const onEdit = (record) => {
    setShowModalEdit(true);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="facility-list-container">
      <div className="facility-list-action-row">
        <div className="facility-list-action-buttons">
          <Button key="back" text="登録" background="#0E6FBA" width={100} />
          <Button key="back" text="削除" background="#FF5757" width={100} />
          <Button key="back" text="再読込" background="#00BF63" width={100} />
        </div>
        <div className="facility-list-action-search-layout">
          <div className="facility-list-action-filter">
            <Select width={60} value={10} />
            <div className="facility-list-action-filter-label">件表示</div>
          </div>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="検索"
            style={{ width: 300 }}
          />
        </div>
      </div>
      <div className="facility-list-table-layout">
        <Table
          columns={columns}
          dataSource={datas}
          rowSelection={rowSelection}
        />
      </div>
      <Modal
        showModal={showModalEdit}
        content={<FacilityInformation />}
        onCancel={() => setShowModalEdit(false)}
        title="施設登録情報"
        width={1300}
        footer={[]}
        closeIcon={false}
      />
    </div>
  );
};
export default FailityList;
