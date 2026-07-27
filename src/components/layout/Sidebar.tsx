import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ReceiptText,
  BarChart3,
  Wallet,
  Settings,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: ReceiptText,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Budget",
    path: "/budget",
    icon: Wallet,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="flex h-full w-[300px] shrink-0 flex-col rounded-[28px] border border-white/10 bg-[#111827]/70 backdrop-blur-xl"
    >
      {/* Logo */}

      <div className="px-6 pt-8 pb-10">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500">
            <span className="text-2xl font-bold text-white">₹</span>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              FinanceFlow
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Personal Finance
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <nav className="flex flex-1 flex-col gap-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center h-12 justify-between rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-600/20"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <div className="flex items-center gap-4">
                <Icon size={20} />

                <span className="text-[15px] font-medium">
                  {item.title}
                </span>
              </div>

              <ChevronRight
                size={16}
                className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Profile */}

      <div className="mt-auto p-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 font-semibold text-white">
              A
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-white">
                Ashish Kumar
              </h3>

              <p className="truncate text-xs text-slate-400">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;