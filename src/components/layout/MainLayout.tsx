import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#030712] p-5">
      <div className="flex h-[calc(100vh-40px)] gap-5">
        {/* Sidebar */}
        <Sidebar />

        {/* Right Section */}
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <Header />

          <main className="flex-1 overflow-hidden rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;