// Я не знаю как избавится от такого задания option_list в селектах

import i18n from "../../lib/i18next";

export const PAYMENT_PROVIDERS = {
  internet: [
    {
      value: "fregat-tv",
      label: `${i18n.t("BILL.PROVIDER_LABEL.INTERNET.FREGAT")}`,
    },
    {
      value: "kievstar",
      label: `${i18n.t("BILL.PROVIDER_LABEL.INTERNET.KIEVSTAR")}`,
    },
    {
      value: "ukrtelekom",
      label: `${i18n.t("BILL.PROVIDER_LABEL.INTERNET.UKRTELEKOM")}`,
    },
  ],
  commun: [
    {
      value: "comprov1",
      label: `${i18n.t("BILL.PROVIDER_LABEL.COMMUNAL.COMPROV_1")}`,
    },
    {
      value: "comprov2",
      label: `${i18n.t("BILL.PROVIDER_LABEL.COMMUNAL.COMPROV_2")}`,
    },
    {
      value: "comprov3",
      label: `${i18n.t("BILL.PROVIDER_LABEL.COMMUNAL.COMPROV_3")}`,
    },
  ],
  education: [
    {
      value: "eduprov1",
      label: `${i18n.t("BILL.PROVIDER_LABEL.EDUCATION.EDUPROV_1")}`,
    },
    {
      value: "eduprov2",
      label: `${i18n.t("BILL.PROVIDER_LABEL.EDUCATION.EDUPROV_2")}`,
    },
    {
      value: "eduprov3",
      label: `${i18n.t("BILL.PROVIDER_LABEL.EDUCATION.EDUPROV_3")}`,
    },
  ],
};

export const PAYMENT_TYPES = [
  { value: "internet", label: "BILL.SERVICE_LABEL.INTERNET" },
  { value: "commun", label: `${i18n.t("BILL.SERVICE_LABEL.COMMUNAL")}` },
  { value: "education", label: `${i18n.t("BILL.SERVICE_LABEL.EDUCATION")}` },
];
