import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <div className="relative w-80">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full h-11 rounded-xl border border-slate-200 pl-11 pr-4 outline-none focus:border-slate-400"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={22} className="text-slate-700" />

          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500" />
        </button>

        <div className="w-11 h-11 rounded-full bg-slate-300" />
      </div>
    </header>
  );
};

export default Header;