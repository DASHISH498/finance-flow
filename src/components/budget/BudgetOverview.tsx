import {
  ArrowDownRight,
  ArrowUpRight,
  BadgePercent,
  PiggyBank,
  Wallet,
} from "lucide-react";

const cards = [
  {
    title: "Monthly Budget",
    value: "$8,000",
    change: "+5%",
    positive: true,
    icon: Wallet,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Total Spent",
    value: "$5,420",
    change: "67.7%",
    positive: false,
    icon: ArrowDownRight,
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Remaining",
    value: "$2,580",
    change: "+12%",
    positive: true,
    icon: PiggyBank,
    color: "from-emerald-500 to-green-400",
  },
  {
    title: "Budget Usage",
    value: "68%",
    change: "Healthy",
    positive: true,
    icon: BadgePercent,
    color: "from-cyan-500 to-sky-500",
  },
];

const BudgetOverview = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_12px_40px_rgba(124,58,237,0.18)]"
          >
            <div className="flex items-start justify-between">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
              >
                <Icon
                  size={24}
                  className="text-white"
                />
              </div>

              <div
                className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  item.positive
                    ? "bg-emerald-500/15 text-emerald-400"
                    : "bg-amber-500/15 text-amber-400"
                }`}
              >
                {item.positive ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}

                {item.change}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-slate-400">
                {item.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                {item.value}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BudgetOverview;