import type { Transaction } from "../../types/transaction";

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow = ({ transaction }: TransactionRowProps) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-[#111827] px-6 py-4 transition-all hover:shadow-md">
      {/* Left */}
      <div>
        <h3 className="font-semibold text-slate-200">
          {transaction.title}
        </h3>

        <p className="text-sm text-slate-500">
          {transaction.category}
        </p>
      </div>

      {/* Right */}
      <div className="text-right">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
            transaction.type === "income"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {transaction.type}
        </span>

        <h3 className="mt-2 text-lg font-bold text-slate-200">
          ₹{transaction.amount.toLocaleString("en-IN")}
        </h3>

        <p className="text-sm text-slate-500">
          {transaction.date}
        </p>
      </div>
    </div>
  );
};

export default TransactionRow;