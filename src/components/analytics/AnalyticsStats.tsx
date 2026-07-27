import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  PiggyBank,
  TrendingUp,
  Wallet,
} from "lucide-react";

const stats = [
  {
    title: "Total Income",
    value: "$24,580",
    change: "+12.4%",
    positive: true,
    icon: DollarSign,
    color: "from-emerald-500 to-green-400",
  },
  {
    title: "Total Expenses",
    value: "$12,430",
    change: "-3.2%",
    positive: false,
    icon: Wallet,
    color: "from-rose-500 to-red-400",
  },
  {
    title: "Savings",
    value: "$8,920",
    change: "+8.7%",
    positive: true,
    icon: PiggyBank,
    color: "from-sky-500 to-cyan-400",
  },
  {
    title: "Investments",
    value: "$15,340",
    change: "+16.1%",
    positive: true,
    icon: TrendingUp,
    color: "from-violet-500 to-fuchsia-500",
  },
];

const AnalyticsStats = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_12px_40px_rgba(124,58,237,0.18)]"
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
                    : "bg-red-500/15 text-red-400"
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

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                {item.value}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsStats;