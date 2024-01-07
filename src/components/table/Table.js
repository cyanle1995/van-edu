import React from "react";
import { Table } from "antd";
import "./styles.scss";

const TableComponent = (props) => {
  const { columns, datas, rowSelection } = props;
  return (
    <Table columns={columns} dataSource={datas} rowSelection={rowSelection} />
  );
};
export default TableComponent;
