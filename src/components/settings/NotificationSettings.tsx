import {
  Bell,
  Brain,
  CreditCard,
  Mail,
  PieChart,
  Wallet,
} from "lucide-react";

const notifications = [
  {
    title: "Email Notifications",
    description: "Receive important updates via email.",
    icon: Mail,
    enabled: true,
  },
  {
    title: "Push Notifications",
    description: "Receive real-time app notifications.",
    icon: Bell,
    enabled: true,
  },
  {
    title: "Payment Alerts",
    description: "Get notified whenever a payment occurs.",
    icon: CreditCard,
    enabled: true,
  },
  {
    title: "Weekly Reports",
    description: "Receive your financial summary every week.",
    icon: PieChart,
    enabled: false,
  },
  {
    title: "Budget Reminders",
    description: "Alerts when you're close to your budget limit.",
    icon: Wallet,
    enabled: true,
  },
  {
    title: "AI Insights",
    description: "Receive personalized financial recommendations.",
    icon: Brain,
    enabled: true,
  },
];

const NotificationSettings = () => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">
          Notifications
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Choose what notifications you want to receive.
        </p>
      </div>

      <div className="space-y-4">
        {notifications.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-violet-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
                  <Icon
                    size={20}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>

              <button
                className={`relative h-7 w-14 rounded-full transition ${
                  item.enabled
                    ? "bg-violet-500"
                    : "bg-slate-600"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                    item.enabled ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>

      <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 py-3 font-semibold text-white transition hover:scale-[1.02]">
        Save Notification Settings
      </button>
    </div>
  );
};

export default NotificationSettings;