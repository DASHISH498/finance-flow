import { budget } from "../../data/budget";

const BudgetCard = () => {
  const remaining = budget.monthlyBudget - budget.spent;
  const progress = (budget.spent / budget.monthlyBudget) * 100;

  return (
    <div className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-slate-200">Monthly Budget</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Budget</span>
          <span className="font-semibold">
            ₹{budget.monthlyBudget.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500">Spent</span>
          <span className="font-semibold text-red-600">
            ₹{budget.spent.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500">Remaining</span>
          <span className="font-semibold text-green-600">
            ₹{remaining.toLocaleString("en-IN")}
          </span>
        </div>

        <p className="text-center text-sm font-medium text-slate-500">
          {progress.toFixed(0)}% Used
        </p>
      </div>
    </div>
  );
};

export default BudgetCard;