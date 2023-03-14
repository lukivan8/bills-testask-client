import React from "react";
import Component from "./component";
import { FormikValues, useFormik } from "formik";
import {
  ACTION_ERROR_INTER,
  FORM_FIELDS,
  FormValues,
  initialValues,
} from "./const";
import { FormikErrors } from "formik/dist/types";
import { useMutation } from "react-query";
import { BILL_ENTITY } from "../../data/bill/const";
import { action } from "./action";

const Container = () => {
  const mutation = useMutation(action);

  const getErrorMessage = () => {
    const error: ACTION_ERROR_INTER = mutation.error as ACTION_ERROR_INTER;
    if (error) {
      return error.message;
    }
    return "";
  };

  const currentStatusMessage = () => {
    switch (mutation.status) {
      case "success":
        return "Successful!";
      case "error":
        return getErrorMessage();
    }
  };

  const handleSubmit = async (newBill: BILL_ENTITY) => {
    await mutation.mutate(newBill);
  };

  const onSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    console.log(values);
    handleSubmit(values);
    setSubmitting(false);
    resetForm();
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

  const formik: FormikValues = useFormik({
    initialValues,
    validate,
    onSubmit,
  });
  const getFieldValue = (name: FORM_FIELDS) => formik.values[name];
  return (
    <Component
      loading={mutation.isLoading}
      handleSubmit={onSubmit}
      validation={validate}
      formik={formik}
      getFieldValue={getFieldValue}
      getCurrentStatusMessage={currentStatusMessage}
    />
  );
};
export default Container;