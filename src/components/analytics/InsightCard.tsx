import {
  AlertTriangle,
  ArrowUpRight,
  BadgeDollarSign,
  Brain,
  Sparkles,
} from "lucide-react";

const insights = [
  {
    title: "Net Savings",
    value: "$8,920",
    subtitle: "Saved this month",
    icon: BadgeDollarSign,
    color: "from-emerald-500 to-green-400",
  },
  {
    title: "Best Month",
    value: "August",
    subtitle: "Highest income",
    icon: ArrowUpRight,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Largest Expense",
    value: "Food & Dining",
    subtitle: "35% of expenses",
    icon: AlertTriangle,
    color: "from-amber-500 to-orange-500",
  },
];

const InsightCard = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {insights.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
            >
              <Icon className="text-white" size={24} />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-2xl font-bold text-white">
              {item.value}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              {item.subtitle}
            </p>
          </div>
        );
      })}

      <div className="rounded-[28px] border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-6 backdrop-blur-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500">
          <Brain className="text-white" size={24} />
        </div>

        <h3 className="mt-6 flex items-center gap-2 text-lg font-semibold text-white">
          AI Insight
          <Sparkles size={18} className="text-yellow-400" />
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          Your spending on <span className="font-semibold text-white">Shopping</span> has
          increased by <span className="font-semibold text-red-400">12%</span> compared to
          last month. Reducing it slightly could help you save around{" "}
          <span className="font-semibold text-emerald-400">$450/month</span>.
        </p>
      </div>
    </div>
  );
};

export default InsightCard;