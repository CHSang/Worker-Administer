import React, { FunctionComponent } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { CustomColumnStyles } from "./Style";

const Table: FunctionComponent<{
  columns: [];
  datas: [];
}> = ({columns, datas}) => {
  return (
    <DataTable
    columns={columns}
    data={datas}
    highlightOnHover={true}
    striped={true}
    pointerOnHover={true}
    responsive={true}
    noHeader={true}
    theme="solarized"
    customStyles={CustomColumnStyles}
  />
  );
};

createTheme('solarized', {
    background: {
      default: '#f2f5ff;',
    },
    divider: {
      default: '#FFFFFF',
    },
    action: {
      hover: 'rgba(232, 239, 255, 1)'
    },
});

export default Table;
