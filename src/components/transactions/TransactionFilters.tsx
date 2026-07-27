import { Search } from "lucide-react";

const TransactionFilters = () => {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search Transactions..."
          className="w-full rounded-xl border border-slate-700 py-3 pl-11 pr-4 outline-none transition focus:border-indigo-500"
        />
      </div>
      <select className="rounded-xl border border-slate-700 px-4 py-3 outline-none focus:border-indigo-500">
        <option>All</option>
        <option>Income</option>
        <option>Expense</option>
      </select>
    </div>
  );
};

export default TransactionFilters;