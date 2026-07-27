import { CalendarDays, DollarSign, MoonStar, Palette } from "lucide-react";

const colors = [
  "#8B5CF6",
  "#06B6D4",
  "#22C55E",
  "#F97316",
  "#EF4444",
];

const AppearanceSettings = () => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">
          Appearance
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Personalize your application.
        </p>
      </div>

      {/* Theme */}

      <div className="mb-6">
        <label className="mb-3 flex items-center gap-2 text-sm text-slate-400">
          <MoonStar size={16} />
          Theme
        </label>

        <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500">
          <option className="bg-[#111827]">Dark</option>
          <option className="bg-[#111827]">Light</option>
          <option className="bg-[#111827]">System</option>
        </select>
      </div>

      {/* Accent */}

      <div className="mb-6">
        <label className="mb-3 flex items-center gap-2 text-sm text-slate-400">
          <Palette size={16} />
          Accent Color
        </label>

        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color}
              style={{ background: color }}
              className="h-10 w-10 rounded-full border-2 border-white/10 transition hover:scale-110"
            />
          ))}
        </div>
      </div>

      {/* Currency */}

      <div className="mb-6">
        <label className="mb-3 flex items-center gap-2 text-sm text-slate-400">
          <DollarSign size={16} />
          Currency
        </label>

        <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500">
          <option className="bg-[#111827]">USD ($)</option>
          <option className="bg-[#111827]">EUR (€)</option>
          <option className="bg-[#111827]">GBP (£)</option>
          <option className="bg-[#111827]">INR (₹)</option>
        </select>
      </div>

      {/* Date Format */}

      <div>
        <label className="mb-3 flex items-center gap-2 text-sm text-slate-400">
          <CalendarDays size={16} />
          Date Format
        </label>

        <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500">
          <option className="bg-[#111827]">DD/MM/YYYY</option>
          <option className="bg-[#111827]">MM/DD/YYYY</option>
          <option className="bg-[#111827]">YYYY-MM-DD</option>
        </select>
      </div>
    </div>
  );
};

export default AppearanceSettings;