import React from 'react';
import {Form} from "formik";
import {Select} from "../../common/select";
import {Input} from "../../common/input";
import {ListLayout} from "../../common/list-layout";
import {Stack} from "../../common/stack";
import {Button} from "../../common/button";

interface PropTypes {
  transactionTypes: { value: string, label: string }[]
  providers: ProviderType
  values: any
  handleChange?: any
  setFieldValue: Function
}

interface ProviderType {
  [key: string]: { value: string; label: string }[];
}

const Component = (props: PropTypes) => {
  return (
    <Form>
      <ListLayout gap="large">
        <Select optionList={props.transactionTypes} label="BILL.FORM_LABEL.TYPE" name="transactionType"/>
        {props.values.transactionType !== "" ? (
          <Select name="provider" optionList={props.providers[props.values.transactionType]}
                  label="BILL.FORM_LABEL.PROVIDER"/>
        ) : (<Select name="provider" optionList={[]} label="BILL.FORM_LABEL.PROVIDER"></Select>)}
        <Input name="privateAccount" label="BILL.FORM_LABEL.ACCOUNT" placeholder="BILL.FORM_PLACEHOLDER.ACCOUNT"/>
        <Input name="paymentAmount" label="BILL.FORM_LABEL.PAYMENT" placeholder="BILL.FORM_PLACEHOLDER.PAYMENT"/>
      </ListLayout>
      <Stack width="90" justifyContent="space-between" gap="medium">
        <Button fill="outline" label="BILL.FORM_BUTTON.CANCEL"/>
        <Button type="submit" fill="solid" label="BILL.FORM_BUTTON.CREATE"/>
      </Stack>
    </Form>
  );
};
export default Component;