import MainLayout from "../../components/layout/MainLayout";
import DashboardHero from "../../components/dashboard/DashboardHero";
import StatCard from "../../components/dashboard/StatCard";
import TransactionTable from "../../components/transactions/TransactionTable";
import BudgetCard from "../../components/budget/BudgetCard";
import IncomeExpenseChart from "../../components/analytics/IncomeExpenseChart";
import ExpensePieChart from "../../components/analytics/ExpensePieChart";
import QuickActions from "../../components/dashboard/QuickActions";

import { dashboardStats } from "../../data/dashboardStats";
import type { StatIcon } from "../../types/dashboard";

import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";

const iconMap: Record<StatIcon, typeof Wallet> = {
  wallet: Wallet,
  income: TrendingUp,
  expense: TrendingDown,
  savings: PiggyBank,
};

const Dashboard = () => {
  return (
    <MainLayout>
      <DashboardHero />

      <div className="overflow-auto h-[calc(100vh-296px)]">
        {/* Stats Cards */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <StatCard
                key={item.id}
                title={item.title}
                amount={item.amount}
                icon={<Icon size={28} className="text-slate-900" />}
                bgColor={item.bgColor}
              />
            );
          })}
        </section>

        {/* Transactions + Budget */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TransactionTable />
          </div>

          <div className="space-y-6">
            <BudgetCard />
            <QuickActions />
          </div>
        </section>

        {/* Charts */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <IncomeExpenseChart />
          <ExpensePieChart />
        </section>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
