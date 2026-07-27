import {
  Plus,
  Wallet,
  Target,
  Download,
} from "lucide-react";

const actions = [
  {
    id: 1,
    title: "Add Transaction",
    icon: Plus,
  },
  {
    id: 2,
    title: "Add Income",
    icon: Wallet,
  },
  {
    id: 3,
    title: "Set Budget",
    icon: Target,
  },
  {
    id: 4,
    title: "Export Report",
    icon: Download,
  },
];

const QuickActions = () => {
  return (
    <div className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="rounded-xl bg-indigo-100 p-3">
                <Icon
                  size={24}
                  className="text-indigo-600"
                />
              </div>

              <span className="text-sm font-semibold text-slate-200">
                {action.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;