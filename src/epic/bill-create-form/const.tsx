import i18n from "../../lib/i18next";
import { PROVIDER_ENUM, TRANSACTION_TYPE_ENUM } from "../../data/bill/const";

export const API_URL = "http://localhost:3000/bill/create";

export const PAYMENT_TYPES = [
  {
    value: TRANSACTION_TYPE_ENUM.INTERNET,
    label: `${i18n.t("BILL.SERVICE_LABEL.1")}`,
  },
  {
    value: TRANSACTION_TYPE_ENUM.COMMUNAL,
    label: `${i18n.t("BILL.SERVICE_LABEL.2")}`,
  },
  {
    value: TRANSACTION_TYPE_ENUM.EDUCATION,
    label: `${i18n.t("BILL.SERVICE_LABEL.3")}`,
  },
];


export const PAYMENT_PROVIDERS = {
  [PAYMENT_TYPES[0].value]: [
    {
      value: PROVIDER_ENUM.FREGAT,
      label: `${i18n.t("BILL.PROVIDER_LABEL.1.1")}`,
    },
    {
      value: PROVIDER_ENUM.KIEVSTAR,
      label: `${i18n.t("BILL.PROVIDER_LABEL.1.2")}`,
    },
    {
      value: PROVIDER_ENUM.UKRTELEKOM,
      label: `${i18n.t("BILL.PROVIDER_LABEL.1.3")}`,
    },
  ],
  [PAYMENT_TYPES[1].value]: [
    {
      value: PROVIDER_ENUM.COMPROV_1,
      label: `${i18n.t("BILL.PROVIDER_LABEL.2.4")}`,
    },
    {
      value: PROVIDER_ENUM.COMPROV_2,
      label: `${i18n.t("BILL.PROVIDER_LABEL.2.5")}`,
    },
    {
      value: PROVIDER_ENUM.COMPROV_3,
      label: `${i18n.t("BILL.PROVIDER_LABEL.2.6")}`,
    },
  ],
  [PAYMENT_TYPES[2].value]: [
    {
      value: PROVIDER_ENUM.EDUPROV_1,
      label: `${i18n.t("BILL.PROVIDER_LABEL.3.7")}`,
    },
    {
      value: PROVIDER_ENUM.EDUPROV_2,
      label: `${i18n.t("BILL.PROVIDER_LABEL.3.8")}`,
    },
    {
      value: PROVIDER_ENUM.EDUPROV_3,
      label: `${i18n.t("BILL.PROVIDER_LABEL.3.9")}`,
    },
  ],
};

export const initialValues = {
  transactionType: 0,
  provider: 0,
  privateAccount: "",
  paymentAmount: "",
};

export interface FormValues {
  transactionType: number;
  provider: number;
  privateAccount: number | "";
  paymentAmount: number | "";
}

export enum FORM_FIELDS {
  TRANSACTION_TYPE = "transactionType",
  PROVIDER = "provider",
  PRIVATE_ACCOUNT = "privateAccount",
  PAYMENT_AMOUNT = "paymentAmount",
}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}