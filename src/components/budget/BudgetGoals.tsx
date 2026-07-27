import { Target, Trophy } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Goal",
    value: 74,
    fill: "#8B5CF6",
  },
];

const BudgetGoals = () => {
  return (
    <div className=" mt-8 rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
          <Target className="text-white" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            Savings Goal
          </h2>

          <p className="text-sm text-slate-400">
            Monthly target progress
          </p>
        </div>
      </div>

      <div className="mt-4 h-[195px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="72%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              dataKey="value"
              cornerRadius={12}
              background={{ fill: "#1F2937" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="-mt-34 text-center">
        <p className="text-2xl font-bold text-white">
          74%
        </p>

        <p className="mt-2 text-slate-400">
          Goal Completed
        </p>
      </div>

      <div className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Saved
          </span>

          <span className="font-semibold text-emerald-400">
            $3,700
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-slate-400">
            Target
          </span>

          <span className="font-semibold text-white">
            $5,000
          </span>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-gradient-to-r from-violet-500/15 to-cyan-500/15 p-4">
        <div className="flex items-start gap-3">
          <Trophy
            size={22}
            className="mt-1 text-yellow-400"
          />

          <div>
            <p className="font-semibold text-white">
              Excellent Progress
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-300">
              You're only <span className="font-semibold text-white">$1,300</span> away
              from reaching your monthly savings goal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetGoals;