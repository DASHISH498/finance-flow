import MainLayout from "../../components/layout/MainLayout";
import AnalyticsStats from "../../components/analytics/AnalyticsStats";
import IncomeExpenseChart from "../../components/analytics/IncomeExpenseChart";
import ExpensePieChart from "../../components/analytics/ExpensePieChart";
import MonthlyBarChart from "../../components/analytics/MonthlyBarChart";
import CategoryProgress from "../../components/analytics/CategoryProgress";
import InsightCard from "../../components/analytics/InsightCard";

const AnalyticsPage = () => {
  return (
    <MainLayout>
      <div className="flex h-full flex-col">
        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Analytics</h1>

          <p className="mt-2 text-slate-400">
            Track your financial performance and spending insights.
          </p>
        </div>

        {/* Stats */}

        <div className="overflow-auto h-[calc(100vh-296px)]">
          <AnalyticsStats />

          {/* Charts */}

          <div className="mt-8 grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <IncomeExpenseChart />
            </div>

            <div className="col-span-4">
              <ExpensePieChart />
            </div>
          </div>

          {/* Bottom */}

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <MonthlyBarChart />
            </div>

            <div className="col-span-4">
              <CategoryProgress />
            </div>
          </div>

          {/* Insights */}

          <div className="mt-6">
            <InsightCard />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AnalyticsPage;
