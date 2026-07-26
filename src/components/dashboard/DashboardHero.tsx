import { Plus } from "lucide-react";

const DashboardHero = () => {
  return (
    <section className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Good Morning, Ashish 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your finances efficiently and stay on top of your budget.
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800">
        <Plus size={18} />
        Add Transaction
      </button>
    </section>
  );
};

export default DashboardHero;