export type TransactionType = "income" | "expense";

export interface Transaction {
  id: number;
  title: string;
  category: string;
  amount: number;
  date: string;
  type: TransactionType;
}