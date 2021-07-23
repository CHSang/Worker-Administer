import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { ButtonWrapper } from "./Style";
import { sltCandidateAdministerData } from "./Redux/selectors";
import { createCandidateAdministerData, getCandidateAdministerData } from "./Redux/Action";
import { CandidateAdministerState } from "./Redux/Type";
import Table from "../../components/Table";
import InputField from "../../components/Input";
import { Caption, Section } from "../Share/Style"
import { Button} from 'reactstrap';
import ModalDialog from "../../components/Modal";

const CandidateAdminister: FunctionComponent<{
  createCandidateAdministerData: Function;
  getCandidateAdministerData: Function;
  candidateAdministerData: any;
}> = ({ createCandidateAdministerData, getCandidateAdministerData,  candidateAdministerData}) => {

  const [name, setName] = useState(''); 
  const [age, setAge] = useState(''); 
  const [role, setRole] = useState('');
  const [isOpenModal, setModalOpen] = useState(false);
  const [candidateAdminister, setCandidateAdminister] = useState<CandidateAdministerState>({
    list: [],
  });

  useEffect(() => {
    getCandidateAdministerData();
  }, []);

  useEffect(() => {
    if (candidateAdministerData && candidateAdministerData.list.length > 0) {
      setCandidateAdminister(candidateAdministerData);
    }
  }, [candidateAdministerData]);

  const handleSubmit =  () => {
    createCandidateAdministerData({name, age, role});
    setModalOpen(true);
    setName('');
    setAge('');
    setRole('');
  };

  return (
    <>
      <Caption>Candidate Administer</Caption>
      <Section>
        <InputField
          label="Username"
          value={name}
          onChangeField={e => setName(e.target.value)}
        />
        <InputField
          label="Age"
          value={age}
          inputType="number"
          onChangeField={e => setAge(e.target.value)}
        />
        <InputField
          label="Role"
          value={role}
          onChangeField={e => setRole(e.target.value)}
        />
        <ButtonWrapper>
            <Button color="primary" onClick={handleSubmit}>Add candidate</Button>
        </ButtonWrapper>
      </Section>
      <Section>
        <Table columns={columns} datas={candidateAdminister.list} />
      </Section>
      <ModalDialog 
        header="Informations"
        content="Add candidate sucessfully"
        footer="Cancel"
        isOpen={isOpenModal}
        onCloseHandler={e => setModalOpen(false)}
      />
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
  candidateAdministerData: sltCandidateAdministerData(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  getCandidateAdministerData: () => {
    dispatch(getCandidateAdministerData());
  },
  createCandidateAdministerData: (data: any) => {
    dispatch(createCandidateAdministerData(data));
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(CandidateAdminister);
