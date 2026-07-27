import { Camera, Mail, MapPin, Phone, User } from "lucide-react";

const ProfileSettings = () => {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">
          Profile Information
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Update your personal information.
        </p>
      </div>

      <div className="flex flex-col items-center border-b border-white/10 pb-8">
        <div className="relative">
          <img
            src="https://i.pravatar.cc/200"
            alt="Profile"
            className="h-28 w-28 rounded-full border-4 border-violet-500 object-cover"
          />

          <button className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-lg transition hover:scale-105">
            <Camera
              size={18}
              className="text-white"
            />
          </button>
        </div>

        <h3 className="mt-5 text-xl font-semibold text-white">
          Ashish Kumar Soni
        </h3>

        <p className="text-slate-400">
          Frontend Developer
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <User size={16} />
            Full Name
          </label>

          <input
            defaultValue="Ashish Kumar Soni"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <Mail size={16} />
            Email
          </label>

          <input
            defaultValue="ashish@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <Phone size={16} />
            Phone
          </label>

          <input
            defaultValue="+91 9876543210"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={16} />
            Location
          </label>

          <input
            defaultValue="Jaipur, Rajasthan"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;