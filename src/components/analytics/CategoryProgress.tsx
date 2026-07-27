const categories = [
  {
    name: "Food & Dining",
    amount: "$3,250",
    progress: 82,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Shopping",
    amount: "$2,180",
    progress: 65,
    color: "from-cyan-500 to-sky-500",
  },
  {
    name: "Bills & Utilities",
    amount: "$1,420",
    progress: 48,
    color: "from-emerald-500 to-green-400",
  },
  {
    name: "Travel",
    amount: "$980",
    progress: 35,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Entertainment",
    amount: "$640",
    progress: 22,
    color: "from-rose-500 to-pink-500",
  },
];

const CategoryProgress = () => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">
          Spending Categories
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Budget utilization by category
        </p>
      </div>

      <div className="space-y-6">
        {categories.map((item) => (
          <div key={item.name}>
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">
                  {item.name}
                </p>

                <p className="text-xs text-slate-400">
                  {item.amount}
                </p>
              </div>

              <span className="text-sm font-semibold text-white">
                {item.progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-700`}
                style={{
                  width: `${item.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProgress;