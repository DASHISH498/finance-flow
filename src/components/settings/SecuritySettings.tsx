import { KeyRound, Laptop, Lock, ShieldCheck } from "lucide-react";

const devices = [
  {
    name: "MacBook Pro",
    status: "Current Device",
  },
  {
    name: "iPhone 15 Pro",
    status: "Last active 2 hours ago",
  },
];

const SecuritySettings = () => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">
          Security
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Protect your account with advanced security.
        </p>
      </div>

      {/* Change Password */}

      <div className="space-y-4">
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <Lock size={16} />
            Current Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <KeyRound size={16} />
            New Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <button className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 py-3 font-semibold text-white transition hover:scale-[1.02]">
          Update Password
        </button>
      </div>

      {/* 2FA */}

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-white">
              <ShieldCheck
                size={18}
                className="text-emerald-400"
              />
              Two-Factor Authentication
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Add an extra layer of security.
            </p>
          </div>

          <button className="relative h-7 w-14 rounded-full bg-violet-500">
            <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white transition" />
          </button>
        </div>
      </div>

      {/* Trusted Devices */}

      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Trusted Devices
        </h3>

        <div className="space-y-3">
          {devices.map((device) => (
            <div
              key={device.name}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
                  <Laptop
                    size={20}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="font-medium text-white">
                    {device.name}
                  </p>

                  <p className="text-sm text-slate-400">
                    {device.status}
                  </p>
                </div>
              </div>

              <button className="text-sm font-medium text-red-400 transition hover:text-red-300">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Logout */}

      <button className="mt-8 w-full rounded-xl border border-red-500/30 bg-red-500/10 py-3 font-semibold text-red-400 transition hover:bg-red-500/20">
        Logout From All Devices
      </button>
    </div>
  );
};

export default SecuritySettings;