import MainLayout from "../../components/layout/MainLayout";
import DashboardHero from "../../components/dashboard/DashboardHero";
import StatCard from "../../components/dashboard/StatCard";

import { dashboardStats } from "../../data/dashboardStats";

const Dashboard = () => {
  return (
    <MainLayout>
      <DashboardHero />

      <section className="grid grid-cols-4 gap-6">
        {dashboardStats.map((item) => (
          <StatCard
            key={item.id}
            title={item.title}
            amount={item.amount}
            icon={item.icon}
            bgColor={item.bgColor}
          />
        ))}
      </section>
    </MainLayout>
  );
};

export default Dashboard;