import {
  Car,
  Film,
  Home,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";

const categories = [
  {
    name: "Food & Dining",
    icon: UtensilsCrossed,
    budget: "$1,500",
    spent: "$1,250",
    progress: 83,
    status: "Under Budget",
    color: "bg-emerald-500",
  },
  {
    name: "Shopping",
    icon: ShoppingBag,
    budget: "$1,000",
    spent: "$1,180",
    progress: 100,
    status: "Over Budget",
    color: "bg-red-500",
  },
  {
    name: "Housing",
    icon: Home,
    budget: "$2,500",
    spent: "$2,150",
    progress: 86,
    status: "Under Budget",
    color: "bg-cyan-500",
  },
  {
    name: "Transport",
    icon: Car,
    budget: "$800",
    spent: "$620",
    progress: 78,
    status: "Under Budget",
    color: "bg-violet-500",
  },
  {
    name: "Entertainment",
    icon: Film,
    budget: "$600",
    spent: "$510",
    progress: 85,
    status: "Under Budget",
    color: "bg-amber-500",
  },
];

const BudgetCategoryList = () => {
  return (
    <div className="mt-8 rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">
          Budget Categories
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Track category-wise spending against your budget.
        </p>
      </div>

      <div className="space-y-6">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
                    <Icon size={22} className="text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      Budget {item.budget} • Spent {item.spent}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "Over Budget"
                      ? "bg-red-500/15 text-red-400"
                      : "bg-emerald-500/15 text-emerald-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-400">
                    Usage
                  </span>

                  <span className="font-medium text-white">
                    {item.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`${item.color} h-full rounded-full transition-all duration-700`}
                    style={{
                      width: `${item.progress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetCategoryList;