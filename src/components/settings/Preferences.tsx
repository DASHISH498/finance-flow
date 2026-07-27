import {
  CalendarDays,
  Clock3,
  Globe,
  Languages,
  PoundSterling,
} from "lucide-react";

const Preferences = () => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">
          Preferences
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Configure your regional and application preferences.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Language */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <Languages size={16} />
            Language
          </label>

          <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500">
            <option className="bg-[#111827]">English</option>
            <option className="bg-[#111827]">Hindi</option>
            <option className="bg-[#111827]">French</option>
            <option className="bg-[#111827]">German</option>
          </select>
        </div>

        {/* Timezone */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <Clock3 size={16} />
            Time Zone
          </label>

          <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500">
            <option className="bg-[#111827]">
              (GMT+05:30) Asia/Kolkata
            </option>

            <option className="bg-[#111827]">
              (GMT+00:00) Europe/London
            </option>

            <option className="bg-[#111827]">
              (GMT-05:00) America/New_York
            </option>
          </select>
        </div>

        {/* Currency */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <PoundSterling size={16} />
            Default Currency
          </label>

          <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500">
            <option className="bg-[#111827]">USD ($)</option>
            <option className="bg-[#111827]">EUR (€)</option>
            <option className="bg-[#111827]">GBP (£)</option>
            <option className="bg-[#111827]">INR (₹)</option>
          </select>
        </div>

        {/* Week Start */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <CalendarDays size={16} />
            Week Starts On
          </label>

          <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500">
            <option className="bg-[#111827]">Monday</option>
            <option className="bg-[#111827]">Sunday</option>
          </select>
        </div>

        {/* Region */}

        <div className="col-span-2">
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <Globe size={16} />
            Region
          </label>

          <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500">
            <option className="bg-[#111827]">India</option>
            <option className="bg-[#111827]">United States</option>
            <option className="bg-[#111827]">United Kingdom</option>
            <option className="bg-[#111827]">Canada</option>
            <option className="bg-[#111827]">Australia</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105">
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default Preferences;