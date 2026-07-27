import { motion } from "framer-motion";
import {
  Bell,
  Search,
  Moon,
  ChevronDown,
} from "lucide-react";

const Header = () => {
  const hours = new Date().getHours();

  const greeting =
    hours < 12
      ? "Good Morning"
      : hours < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="flex h-[82px] items-center justify-between rounded-[28px] border border-white/10 bg-[#111827]/70 px-6 backdrop-blur-xl"
    >
      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          {greeting}, Ashish 👋
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Here's what's happening with your finances today.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">
        {/* Search */}

        <div className="flex h-12 w-[300px] items-center rounded-2xl border border-white/10 bg-white/5 px-4">
          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
        </div>

        {/* Theme */}

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white">
          <Moon size={18} />
        </button>

        {/* Notification */}

        <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white">
          <Bell size={18} />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 transition-all duration-300 hover:bg-white/10">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-bold text-white">
            A
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-white">
              Ashish Kumar
            </p>

            <p className="text-xs text-slate-400">
              Premium User
            </p>
          </div>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;