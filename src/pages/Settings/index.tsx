import MainLayout from "../../components/layout/MainLayout";
import NotificationSettings from "../../components/settings/NotificationSettings";
import ConnectedAccounts from "../../components/settings/ConnectedAccounts";
import Preferences from "../../components/settings/Preferences";
import ProfileSettings from "../../components/settings/ProfileSettings";
import AppearanceSettings from "../../components/settings/AppearanceSettings";
import SecuritySettings from "../../components/settings/SecuritySettings";

const SettingsPage = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Settings</h1>

          <p className="mt-2 text-slate-400">
            Manage your account, preferences and application settings.
          </p>
        </div>

        <div className="overflow-auto h-[calc(100vh-296px)]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <ProfileSettings />
            </div>

            <div className="col-span-4">
              <AppearanceSettings />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <SecuritySettings />
            </div>

            <div className="col-span-6">
              <NotificationSettings />
            </div>
          </div>

          <ConnectedAccounts />

          <Preferences />
        </div>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
