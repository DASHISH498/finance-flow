import { Plus } from "lucide-react";

const TransactionHeader = () => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-300">Transactions</h1>

        <p className="mt-2 text-slate-500">
          Manage your all income and expenses
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700">
        <Plus size={20} />
        Add Transaction
      </button>
    </div>
  );
};

export default TransactionHeader;