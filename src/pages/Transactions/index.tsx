import MainLayout from "../../components/layout/MainLayout";
import TransactionHeader from "../../components/transactions/TransactionHeader";
import TransactionFilters from "../../components/transactions/TransactionFilters";
import TransactionList from "../../components/transactions/TransactionList";

const Transactions = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <TransactionHeader />

        <TransactionFilters />

        <TransactionList />
      </div>
    </MainLayout>
  );
};

export default Transactions;