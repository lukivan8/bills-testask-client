import { API_URL } from "./const";

export const fetchBillData = async () => {
  const data = await fetch(API_URL);
  const result = await data.json();
  console.log(result);
  return result;
};