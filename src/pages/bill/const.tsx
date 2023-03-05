export interface BILL_ENTITY {
  billId: number;
  transactionType: string;
  provider: string;
  privateAccount: number;
  paymentAmount: number;
  creationTime: string;
}

export const API_URL = "http://localhost:3000/bill/list";