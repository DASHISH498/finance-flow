import MainLayout from "../../components/layout/MainLayout";
import BudgetOverview from "../../components/budget/BudgetOverview";
import BudgetVsActualChart from "../../components/budget/BudgetVsActualChart";
import BudgetCategoryList from "../../components/budget/BudgetCategoryList";
import BudgetGoals from "../../components/budget/BudgetGoals";
import BudgetAlerts from "../../components/budget/BudgetAlerts";

const BudgetPage = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Budget Planner</h1>

          <p className="mt-2 text-slate-400">
            Plan, monitor and optimise your monthly budget.
          </p>
        </div>

        <div className="overflow-auto h-[calc(100vh-296px)]">
          <BudgetOverview />

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <BudgetVsActualChart />
            </div>

            <div className="col-span-4">
              <BudgetGoals />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <BudgetCategoryList />
            </div>

            <div className="col-span-4">
              <BudgetAlerts />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BudgetPage;
