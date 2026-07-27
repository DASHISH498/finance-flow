export interface Transaction {
  id: number;
  title: string;
  category: string;
  amount: number;
  type: "income" | "expense";
  date: string;
}

export const transactions: Transaction[] = [
  {
    id: 1,
    title: "Salary",
    category: "Job",
    amount: 45000,
    type: "income",
    date: "25 Jul 2026",
  },
  {
    id: 2,
    title: "Groceries",
    category: "Food",
    amount: 3200,
    type: "expense",
    date: "24 Jul 2026",
  },
  {
    id: 3,
    title: "Netflix",
    category: "Entertainment",
    amount: 649,
    type: "expense",
    date: "23 Jul 2026",
  },
  {
    id: 4,
    title: "Freelance",
    category: "Side Income",
    amount: 18000,
    type: "income",
    date: "21 Jul 2026",
  },
  {
    id: 5,
    title: "Electricity Bill",
    category: "Bills",
    amount: 2100,
    type: "expense",
    date: "20 Jul 2026",
  },
  {
    id: 6,
    title: "Fuel",
    category: "Transport",
    amount: 1800,
    type: "expense",
    date: "18 Jul 2026",
  },
];