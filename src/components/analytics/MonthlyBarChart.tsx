import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", amount: 4200 },
  { month: "Feb", amount: 5100 },
  { month: "Mar", amount: 4800 },
  { month: "Apr", amount: 6200 },
  { month: "May", amount: 5900 },
  { month: "Jun", amount: 7100 },
  { month: "Jul", amount: 6800 },
  { month: "Aug", amount: 7600 },
];

const MonthlyBarChart = () => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">
          Monthly Revenue
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Revenue generated every month
        </p>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <defs>
              <linearGradient
                id="barGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#8B5CF6"
                />
                <stop
                  offset="100%"
                  stopColor="#06B6D4"
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8" }}
            />

            <Tooltip
              cursor={{ fill: "rgba(255,255,255,.03)" }}
              contentStyle={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="amount"
              fill="url(#barGradient)"
              radius={[10, 10, 0, 0]}
              maxBarSize={36}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyBarChart;