import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getWorkerAdministerData } from "./Redux/Action";
import { sltWorkerAdministerData } from "./Redux/selectors";
import { WorkerAdministerState } from "./Redux/Type";
import Table from "../../components/Table";
import { Caption, Section } from "../Share/Style";

const WorkerAdminister: FunctionComponent<{
  getWorkerAdministerData: Function;
  workerAdministerData: any;
}> = ({ getWorkerAdministerData, workerAdministerData }) => {
  const [workerAdminister, setWorkerAdminister] = useState<WorkerAdministerState>({
    list: [],
  });

  useEffect(() => {
    getWorkerAdministerData();
  }, []);

  useEffect(() => {
    if (workerAdministerData && workerAdministerData.list.length > 0) {
      setWorkerAdminister(workerAdministerData);
    }
  }, [workerAdministerData]);

  return (
    <>
      <Caption> Worker Administer </Caption>
      <Section>
        <Table columns={columns} datas={workerAdminister.list} />
      </Section>
    </>
  );
};

const columns = [
  {
    name: "No.",
    selector: "index",
    selector: (row: any, index: number) => {
      return index + 1;
    },
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Age",
    selector: "age",
    sortable: true,
  },
  {
    name: "Role",
    selector: "role",
    sortable: true,
  },
];

const mapStateToProps = (state: any) => ({
  workerAdministerData: sltWorkerAdministerData(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  getWorkerAdministerData: () => {
    dispatch(getWorkerAdministerData());
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(WorkerAdminister);
