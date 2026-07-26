import {
  LayoutDashboard,
  ReceiptText,
  BarChart3,
  Wallet,
  Settings,
} from "lucide-react";

const menuItems = [
  { id: 1, title: "Dashboard", icon: <LayoutDashboard size={20} /> },
  { id: 2, title: "Transactions", icon: <ReceiptText size={20} /> },
  { id: 3, title: "Analytics", icon: <BarChart3 size={20} /> },
  { id: 4, title: "Budget", icon: <Wallet size={20} /> },
  { id: 5, title: "Settings", icon: <Settings size={20} /> },
];

const Sidebar = () => {
  return (
    <aside className="w-72 bg-[#F8FAFC] border-r border-slate-200 flex flex-col">
      <div className="h-20 flex items-center px-6 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-800">FinanceFlow</h1>
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-100 transition-all"
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
      </nav>

      <div className="border-t border-slate-200 p-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-300" />

          <div>
            <p className="font-semibold text-slate-800">
              Ashish Kumar
            </p>

            <p className="text-sm text-slate-500">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
