import { Link, Routes, Route } from "react-router-dom";
import Practice from "./Practice";
import History from "./History";
import Setting from "./Setting";

const Sidebar = () => {
  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <nav className="w-55 bg-gradient-to-b from-blue-700 to-blue-900 text-white p-6 flex flex-col">
        <h2 className="text-xl font-extrabold mb-8 select-none tracking-wide drop-shadow-md">
          Typing System
        </h2>
        <ul className="flex flex-col gap-4">
          {[
            { name: "Practice", to: "/sidebar/practice" },
            { name: "History", to: "/sidebar/history" },
            { name: "Setting", to: "/sidebar/setting" },
          ].map(({ name, to }) => (
            <li key={name}>
              <Link
                to={to}
                className="
                  block px-4 py-3 rounded-lg
                  transition-all duration-200
                  hover:bg-white hover:text-blue-800
                  hover:shadow-lg
                  active:scale-95
                  cursor-pointer
                  select-none
                "
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content area */}
      <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        <Routes>
          <Route path="practice" element={<Practice />} />
          <Route path="history" element={<History />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      </main>
    </div>
  );
};

export default Sidebar;
