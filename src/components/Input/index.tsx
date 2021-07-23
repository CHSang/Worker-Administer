import React, { FunctionComponent } from "react";
import { InputWrapper } from "./Style";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const InputField: FunctionComponent<{
  label: string;
  value: any;
  onChangeField?: Function;
  inputType?: string;
}> = ({
  label,
  value,
  onChangeField = (data: any) => {},
  inputType = "text",
}) => {
  return (
    <InputWrapper>
    <Form>
      <FormGroup>
        <Label for={label}>{label}</Label>
        <Input type={inputType} value={value} onChange={onChangeField}/>
      </FormGroup>
    </Form>
    </InputWrapper>
  );
};

export default InputField;
