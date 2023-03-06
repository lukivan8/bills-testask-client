import React from "react";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { Select } from "../../common/select";
import { Input } from "../../common/input";
import { ListLayout } from "../../common/list-layout";
import { Stack } from "../../common/stack";
import { Button } from "../../common/button";
import { initialValues, PAYMENT_PROVIDERS, PAYMENT_TYPES } from "./const";
import { FormikErrors } from "formik/dist/types";

const Component: React.FC<{
  handleSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>;
  validation: (
    values: FormikValues
  ) => void | object | Promise<FormikErrors<FormikValues>>;
}> = ({ handleSubmit, validation }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={handleSubmit}
    >
      {({ values, isValid }) => (
        <Form>
          <ListLayout gap="large">
            <Select
              optionList={PAYMENT_TYPES}
              label="BILL.FORM_LABEL.TYPE"
              name="transactionType"
            />
            {values.transactionType !== "" ? (
              <Select
                name="provider"
                optionList={PAYMENT_PROVIDERS[values.transactionType]}
                label="BILL.FORM_LABEL.PROVIDER"
              />
            ) : (
              <Select
                name="provider"
                optionList={[]}
                label="BILL.FORM_LABEL.PROVIDER"
              ></Select>
            )}
            <Input
              type="number"
              name="privateAccount"
              label="BILL.FORM_LABEL.ACCOUNT"
              placeholder="BILL.FORM_PLACEHOLDER.ACCOUNT"
            />
            <Input
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
              href="/"
            />
            <Button
              disabled={!isValid}
              type="submit"
              fill="solid"
              label="BILL.FORM_BUTTON.CREATE"
            />
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
export default Component;