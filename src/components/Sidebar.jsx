import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import logo from "../assets/Vector.svg";

// icons
import { MdDashboardCustomize } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";
import { FaClipboardList, FaBookOpen } from "react-icons/fa";
import { RiLiveLine } from "react-icons/ri";
import { AiOutlineFileDone } from "react-icons/ai";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="sidebar__brand">
        <img src={logo} alt="Logo" className="sidebar__logoCircle" />
        <div>
          <h2 className="sidebar__title">ShikshaCom</h2>
          <p className="sidebar__tagline">
            Empowerment Through Education
          </p>
        </div>
      </div>

      {/* Links */}
      <nav className="sidebar__nav">
        {/* Dashboard */}
        <NavLink className="sidebar__link" to="/" end>
          <span className="sidebar__icon">
            <MdDashboardCustomize />
          </span>
          Dashboard
        </NavLink>

        {/* Subjects */}
        <NavLink className="sidebar__link" to="/subjects">
          <span className="sidebar__icon">
            <BsBook />
          </span>
          Subjects
        </NavLink>

        {/* Assignments (COURSE LEVEL) */}
        <NavLink className="sidebar__link" to="/assignments">
          <span className="sidebar__icon">
            <FaClipboardList />
          </span>
          Assignments
        </NavLink>

        {/* Quiz */}
        <NavLink className="sidebar__link" to="/quiz">
          <span className="sidebar__icon">
            <AiOutlineFileDone />
          </span>
          Quiz
        </NavLink>

        {/* Recordings */}
        <NavLink className="sidebar__link" to="/recordings">
          <span className="sidebar__icon">
            <BiVideo />
          </span>
          Recordings
        </NavLink>

        {/* Study Material */}
        <NavLink className="sidebar__link" to="/study-material">
          <span className="sidebar__icon">
            <FaBookOpen />
          </span>
          Study Material
        </NavLink>

        {/* Live Sessions */}
        <NavLink className="sidebar__link" to="/live-sessions">
          <span className="sidebar__icon">
            <RiLiveLine />
          </span>
          Live Sessions
        </NavLink>
      </nav>
    </aside>
  );
}