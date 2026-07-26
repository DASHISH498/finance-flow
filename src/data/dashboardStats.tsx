import {
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  PiggyBank,
} from "lucide-react";

export const dashboardStats = [
  {
    id: 1,
    title: "Total Balance",
    amount: "₹1,25,000",
    icon: <Wallet size={24} className="text-indigo-600" />,
    bgColor: "bg-indigo-100",
  },
  {
    id: 2,
    title: "Income",
    amount: "₹55,000",
    icon: <ArrowDownCircle size={24} className="text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    title: "Expense",
    amount: "₹27,000",
    icon: <ArrowUpCircle size={24} className="text-red-600" />,
    bgColor: "bg-red-100",
  },
  {
    id: 4,
    title: "Savings",
    amount: "₹28,000",
    icon: <PiggyBank size={24} className="text-amber-600" />,
    bgColor: "bg-amber-100",
  },
];