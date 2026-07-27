import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", income: 4200, expense: 2400 },
  { month: "Feb", income: 5100, expense: 2800 },
  { month: "Mar", income: 4800, expense: 3100 },
  { month: "Apr", income: 6200, expense: 3600 },
  { month: "May", income: 5900, expense: 3300 },
  { month: "Jun", income: 7100, expense: 4200 },
  { month: "Jul", income: 6800, expense: 3900 },
  { month: "Aug", income: 7600, expense: 4300 },
];

const IncomeExpenseChart = () => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Income vs Expense
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Monthly financial performance
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="text-sm text-slate-300">
              Income
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="text-sm text-slate-300">
              Expense
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}

      <div className="h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="income"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#22C55E"
                  stopOpacity={0.45}
                />
                <stop
                  offset="100%"
                  stopColor="#22C55E"
                  stopOpacity={0}
                />
              </linearGradient>

              <linearGradient
                id="expense"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#EF4444"
                  stopOpacity={0.45}
                />
                <stop
                  offset="100%"
                  stopColor="#EF4444"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="income"
              stroke="#22C55E"
              strokeWidth={3}
              fill="url(#income)"
            />

            <Area
              type="monotone"
              dataKey="expense"
              stroke="#EF4444"
              strokeWidth={3}
              fill="url(#expense)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeExpenseChart;