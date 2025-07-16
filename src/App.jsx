import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from "./pages/Sidebar";
import Practice from "./pages/Practice";
import History from "./pages/History";
import Setting from "./pages/Setting";
import Home from "./components/Home";
import AdminPanel from "./pages/AdminPanel";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/sidebar/*" element={<Sidebar />} />
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/practice" element={<Practice />} />
        
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/history" element={<History />} />
        <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}

export default App;
