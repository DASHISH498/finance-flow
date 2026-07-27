import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  amount: string;
  icon: ReactNode;
  bgColor: string;
}

const StatCard = ({
  title,
  amount,
  icon,
  bgColor,
}: StatCardProps) => {
  return (
    <div className="rounded-3xl bg-[#111827] p-6 shadow-sm border border-slate-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-300">
            {amount}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bgColor}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;