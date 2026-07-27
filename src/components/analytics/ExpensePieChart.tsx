import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food", value: 35, color: "#8B5CF6" },
  { name: "Shopping", value: 22, color: "#06B6D4" },
  { name: "Transport", value: 18, color: "#22C55E" },
  { name: "Bills", value: 15, color: "#F59E0B" },
  { name: "Entertainment", value: 10, color: "#EF4444" },
];

const ExpensePieChart = () => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      {/* Header */}

      <div>
        <h2 className="text-xl font-semibold text-white">
          Expense Breakdown
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Spending by category
        </p>
      </div>

      {/* Chart */}

      <div className="mt-8 h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={4}
              stroke="transparent"
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}

      <div className="mt-6 space-y-4">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span className="text-sm text-slate-300">
                {item.name}
              </span>
            </div>

            <span className="text-sm font-semibold text-white">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensePieChart;