import {
  AlertTriangle,
  Brain,
  CalendarClock,
  Sparkles,
  TrendingDown,
} from "lucide-react";

const alerts = [
  {
    title: "Shopping Budget Exceeded",
    description: "You've spent 18% more than your shopping budget this month.",
    icon: AlertTriangle,
    color: "from-red-500 to-rose-500",
    badge: "High",
    badgeColor: "bg-red-500/15 text-red-400",
  },
  {
    title: "Electricity Bill Due",
    description: "Your electricity bill is due in the next 3 days.",
    icon: CalendarClock,
    color: "from-amber-500 to-orange-500",
    badge: "Reminder",
    badgeColor: "bg-amber-500/15 text-amber-400",
  },
  {
    title: "Weekly Spending Increased",
    description: "Your expenses increased by 9% compared to last week.",
    icon: TrendingDown,
    color: "from-cyan-500 to-sky-500",
    badge: "Medium",
    badgeColor: "bg-cyan-500/15 text-cyan-400",
  },
];

const BudgetAlerts = () => {
  return (
    <div className="mt-8 rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">
          Smart Alerts
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Budget insights and reminders.
        </p>
      </div>

      <div className="space-y-5">
        {alerts.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-violet-500/20"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color}`}
                >
                  <Icon
                    size={20}
                    className="text-white"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
              <Brain
                className="text-white"
                size={22}
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white">
                  AI Recommendation
                </h3>

                <Sparkles
                  size={16}
                  className="text-yellow-400"
                />
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                If you reduce your <span className="font-semibold text-white">Shopping</span> spending by just <span className="font-semibold text-red-400">10%</span>, you'll save approximately <span className="font-semibold text-emerald-400">$120</span> this month and achieve <span className="font-semibold text-cyan-400">90%+</span> of your savings goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetAlerts;