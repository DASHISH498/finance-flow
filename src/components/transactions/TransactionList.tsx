import TransactionCard from "./TransactionCard";
import { transactions } from "../../data/transactions";

const TransactionList = () => {
    return (
        <div className="space-y-4 overflow-auto h-[calc(100vh-370px)]">
            {transactions.map((transaction) => (
                <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
        </div>
    );
};

export default TransactionList;