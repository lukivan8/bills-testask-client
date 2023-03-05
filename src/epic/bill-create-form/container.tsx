import React from "react";
import { Formik } from "formik";
import Component from "./component";
import { PAYMENT_PROVIDERS, PAYMENT_TYPES } from "./const";

const initialValues = {
  transactionType: "",
  provider: "",
  privateAccount: "",
  paymentAmount: "",
};

const Container: React.FC<{ submit: Function }> = ({ submit }) => {
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    // @ts-ignore
    values.privateAccount = Number(values.privateAccount);
    // @ts-ignore
    values.paymentAmount = Number(values.paymentAmount);
    submit(values);
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {({ values, handleChange, setFieldValue }: any) => (
        <Component
          setFieldValue={setFieldValue}
          handleChange={handleChange}
          values={values}
          transactionTypes={PAYMENT_TYPES}
          providers={PAYMENT_PROVIDERS}
        />
      )}
    </Formik>
  );
};

export default Container;