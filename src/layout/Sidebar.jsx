import { NavLink } from "react-router-dom";

const links = [
  { icon: "🏠", label: "Dashboard", path: "/" },
  { icon: "➕", label: "Add", path: "/add" },
]

const Sidebar = () => {
  return (
    <>
      <aside className="hidden w-60 flex-col gap-6 bg-slate-900 p-4 text-white md:flex">
        <div>
          <h2 className="text-xl font-bold">PrepPilot</h2>
          <p className="text-xs text-slate-400">Interview Prep Tracker</p>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {links.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                  isActive ? "bg-indigo-600" : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="rounded-xl bg-slate-800 p-3 text-sm">
          <p className="font-semibold">Stay Consistent</p>
          <p className="mt-1 text-xs text-slate-400">
            Small steps every day lead to big opportunities.
          </p>
        </div>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-10 flex justify-around border-t bg-white py-2 md:hidden">
        {links.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-indigo-600" : "text-slate-500"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;