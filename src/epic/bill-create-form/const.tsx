// Я не знаю как избавится от такого задания option_list в селектах

export const PAYMENT_PROVIDERS = {
  "internet": [
    {value: "fregat-tv", label: "Фрегат ТВ, ООО"},
    {value: "kievstar", label: "АО Киевстар"},
    {value: "ukrtelekom", label: "ПАО Укртелеком"}
  ],
  "commun": [
    {value: "comprov1", label: "Провайдер услуг 1"},
    {value: "comprov2", label: "Провайдер услуг 2"},
    {value: "comprov3", label: "Провайдер услуг 3"}
  ],
  "education": [
    {value: "eduprov1", label: "Провайдер обучения 1"},
    {value: "eduprov2", label: "Провайдер обучения 2"},
    {value: "eduprov3", label: "Провайдер обучения 3"}
  ]
};


export const PAYMENT_TYPES = [
  {value: "internet", label: "Оплата інтернет послуг"},
  {value: "commun", label: "Оплата коммунальних послуг"},
  {value: "education", label: "Оплата освіти"}
];
