import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", budget: 8000, actual: 7200 },
  { month: "Feb", budget: 8000, actual: 6900 },
  { month: "Mar", budget: 8000, actual: 7500 },
  { month: "Apr", budget: 8000, actual: 7900 },
  { month: "May", budget: 8000, actual: 6800 },
  { month: "Jun", budget: 8000, actual: 7400 },
  { month: "Jul", budget: 8000, actual: 7050 },
  { month: "Aug", budget: 8000, actual: 7600 },
];

const BudgetVsActualChart = () => {
  return (
    <div className=" mt-8 rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">
          Budget vs Actual
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Compare planned budget with actual spending.
        </p>
      </div>

      <div className="h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <defs>
              <linearGradient id="budgetBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6D28D9" />
              </linearGradient>

              <linearGradient id="actualBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#0891B2" />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#94A3B8" }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{ fill: "#94A3B8" }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Legend />

            <Bar
              dataKey="budget"
              name="Budget"
              fill="url(#budgetBar)"
              radius={[8, 8, 0, 0]}
              maxBarSize={24}
            />

            <Bar
              dataKey="actual"
              name="Actual"
              fill="url(#actualBar)"
              radius={[8, 8, 0, 0]}
              maxBarSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BudgetVsActualChart;