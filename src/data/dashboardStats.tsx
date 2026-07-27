import type { DashboardStat } from "../types/dashboard";

export const dashboardStats: DashboardStat[] = [
  {
    id: 1,
    title: "Total Balance",
    amount: "₹2,45,000",
    icon: "wallet",
    bgColor: "bg-indigo-100",
  },
  {
    id: 2,
    title: "Income",
    amount: "₹75,000",
    icon: "income",
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    title: "Expense",
    amount: "₹32,000",
    icon: "expense",
    bgColor: "bg-red-100",
  },
  {
    id: 4,
    title: "Savings",
    amount: "₹43,000",
    icon: "savings",
    bgColor: "bg-yellow-100",
  },
];