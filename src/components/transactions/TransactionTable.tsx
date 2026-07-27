import { transactions } from "../../data/transactions";
import TransactionRow from "./TransactionRow";

const TransactionTable = () => {
  return (
    <section className="rounded-3xl border border-slate-700 bg-[#111827]] p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-200">
          Recent Transactions
        </h2>

        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
          View All →
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </div>
    </section>
  );
};

export default TransactionTable;