import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <>
      <nav className="sticky-top">
        <ul>
          <li>
            <NavLink to="/" className={getClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/enroll" className={getClass}>
              Enroll
            </NavLink>
          </li>
          <li>
            <NavLink to="/event" className={getClass}>
              Event
            </NavLink>
          </li>
          <li>
            <NavLink to="/Teacher" className={getClass}>
              Teacher
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" className={getClass}>
              Resources
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={getClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
