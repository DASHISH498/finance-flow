import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import type { Transaction } from "../../data/transactions";

interface Props {
  transaction: Transaction;
}

const TransactionCard = ({ transaction }: Props) => {
  const income = transaction.type === "income";

  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-[#111827] p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-4">
        <div
          className={`rounded-xl p-3 ${
            income ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {income ? (
            <ArrowDownLeft className="text-green-600" size={22} />
          ) : (
            <ArrowUpRight className="text-red-600" size={22} />
          )}
        </div>

        <div>
          <h3 className="font-semibold text-slate-300">
            {transaction.title}
          </h3>

          <p className="text-sm text-slate-500">
            {transaction.category}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p
          className={`text-lg font-bold ${
            income ? "text-green-600" : "text-red-600"
          }`}
        >
          {income ? "+" : "-"}₹{transaction.amount.toLocaleString()}
        </p>

        <p className="text-sm text-slate-500">
          {transaction.date}
        </p>
      </div>
    </div>
  );
};

export default TransactionCard;