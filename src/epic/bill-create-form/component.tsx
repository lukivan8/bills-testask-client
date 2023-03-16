import React from "react";
import { FormikHelpers, FormikValues } from "formik";
import { Select } from "../../common/select";
import { Input } from "../../common/input";
import { ListLayout } from "../../common/list-layout";
import { Stack } from "../../common/stack";
import { Button } from "../../common/button";
import { FORM_FIELDS, PAYMENT_PROVIDERS, PAYMENT_TYPES } from "./const";
import { FormikErrors } from "formik/dist/types";
import { Status } from "../../common/status";
import { Loader } from "../../common/loader";

const Component: React.FC<{
  handleSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>;
  validation: (
    values: FormikValues
  ) => void | object | Promise<FormikErrors<FormikValues>>;
  loading: boolean;
  formik: FormikValues;
  getFieldValue: Function;
  getErrorMessage?: Function;
  isSuccess?: boolean;
  getCurrentStatusMessage:Function
}> = ({
  loading,
  formik,
  getFieldValue,
  getCurrentStatusMessage
}) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      {loading && <Loader />}
      <ListLayout gap="large">
        <Select
          onChange={formik.handleChange}
          value={formik.values[FORM_FIELDS.TRANSACTION_TYPE]}
          optionList={PAYMENT_TYPES}
          label="BILL.FORM_LABEL.TYPE"
          name="transactionType"
        />
        {formik.values[FORM_FIELDS.TRANSACTION_TYPE] !== 0 ? (
          <Select
            onChange={formik.handleChange}
            value={formik.values[FORM_FIELDS.PROVIDER]}
            name="provider"
            optionList={
              PAYMENT_PROVIDERS[formik.values[FORM_FIELDS.TRANSACTION_TYPE]]
            }
            label="BILL.FORM_LABEL.PROVIDER"
          />
        ) : (
          <Select
            onChange={formik.handleChange}
            value={formik.values[FORM_FIELDS.PROVIDER]}
            name="provider"
            optionList={[]}
            label="BILL.FORM_LABEL.PROVIDER"
          ></Select>
        )}
        <Input
          onChange={formik.handleChange}
          value={getFieldValue(FORM_FIELDS.PRIVATE_ACCOUNT)}
          type="number"
          name="privateAccount"
          label="BILL.FORM_LABEL.ACCOUNT"
          placeholder="BILL.FORM_PLACEHOLDER.ACCOUNT"
        />
        <Input
          onChange={formik.handleChange}
          value={getFieldValue(FORM_FIELDS.PAYMENT_AMOUNT)}
          type="number"
          name="paymentAmount"
          label="BILL.FORM_LABEL.PAYMENT"
          placeholder="BILL.FORM_PLACEHOLDER.PAYMENT"
        />
      </ListLayout>
      <Stack width="90%" justifyContent="space-between" gap="medium">
        <Button
          type="button"
          fill="outline"
          label="BILL.FORM_BUTTON.CANCEL"
          onClick={formik.resetForm}
        />
        <Button
          disabled={!formik.isValid || loading}
          type="submit"
          fill="solid"
          label="BILL.FORM_BUTTON.CREATE"
        />
      </Stack>
      <Status message={getCurrentStatusMessage()} />
    </form>
  );
};
export default Component;