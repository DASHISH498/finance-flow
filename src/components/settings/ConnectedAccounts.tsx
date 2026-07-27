import { Apple, CheckCircle2, Link2 } from "lucide-react";

import {
  SiGoogle,
  SiGithub,
  SiDiscord,
} from "react-icons/si";

const accounts = [
  {
    name: "Google",
    icon: SiGoogle,
    connected: true,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    connected: true,
    color: "from-slate-700 to-slate-500",
  },
  {
    name: "Apple",
    icon: Apple,
    connected: false,
    color: "from-slate-500 to-slate-300",
  },
  {
    name: "Discord",
    icon: SiDiscord,
    connected: true,
    color: "from-indigo-500 to-violet-500",
  },
];

const ConnectedAccounts = () => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">
          Connected Accounts
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Manage third-party accounts connected to FinanceFlow.
        </p>
      </div>

      <div className="space-y-4">
        {accounts.map((account) => {
          const Icon = account.icon;

          return (
            <div
              key={account.name}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-violet-500/20"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${account.color}`}
                >
                  <Icon
                    className="text-white"
                    size={24}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {account.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-2">
                    {account.connected ? (
                      <>
                        <CheckCircle2
                          size={15}
                          className="text-emerald-400"
                        />

                        <span className="text-sm text-emerald-400">
                          Connected
                        </span>
                      </>
                    ) : (
                      <>
                        <Link2
                          size={15}
                          className="text-slate-400"
                        />

                        <span className="text-sm text-slate-400">
                          Not Connected
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                className={`rounded-xl px-5 py-2 font-medium transition ${
                  account.connected
                    ? "border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20"
                    : "bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:scale-105"
                }`}
              >
                {account.connected ? "Disconnect" : "Connect"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectedAccounts;