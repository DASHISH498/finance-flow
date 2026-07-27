export type StatIcon =
  | "wallet"
  | "income"
  | "expense"
  | "savings";

export interface DashboardStat {
  id: number;
  title: string;
  amount: string;
  icon: StatIcon;
  bgColor: string;
}