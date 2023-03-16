import { BILL_ENTITY } from "../../data/bill/const";
import { API_URL } from "./const";

export const action = async (entity: BILL_ENTITY) => {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entity),
  });
};
