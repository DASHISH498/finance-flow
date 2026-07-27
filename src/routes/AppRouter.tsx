import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Analytics from "../pages/Analytics";
import Budget from "../pages/Budget";
import Settings from "../pages/Settings";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/transactions"
          element={<Transactions />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/budget"
          element={<Budget />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;