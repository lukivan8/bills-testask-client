import React from "react";
import Component from "./component";
import { FormikValues } from "formik";
import { FormValues } from "./const";
import { FormikErrors } from "formik/dist/types";
import { useMutation } from "react-query";
import { BILL_ENTITY } from "../../pages/bill/const";
import { action } from "./action";

const Container = () => {
  const { mutate } = useMutation(action);

  const handleSubmit = async (newBill: BILL_ENTITY) => {
    console.log("New Bill" + newBill);
    await mutate(newBill);
  };

  const onSubmit = (values: any, { setSubmitting }: any) => {
    handleSubmit(values);
    console.log(values);
    setSubmitting(false);
  };

  const validate = (values: FormikValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.transactionType) {
      errors.transactionType = "Required";
    }

    if (!values.provider) {
      errors.provider = "Required";
    }

    if (!values.privateAccount && values.privateAccount !== 0) {
      errors.privateAccount = "Required";
    } else if (isNaN(Number(values.privateAccount))) {
      errors.privateAccount = "Must be a positive number";
    }
    if (!values.paymentAmount && values.paymentAmount !== 0) {
      errors.paymentAmount = "Required";
    } else if (isNaN(Number(values.paymentAmount))) {
      errors.paymentAmount = "Must be a number";
    }
    return errors;
  };

  return <Component handleSubmit={onSubmit} validation={validate} />;
};

export default Container;