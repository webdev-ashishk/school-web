import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur a
        ut excepturi id aut, qui in? Quia, culpa quam? Velit dolore sit enim
        officiis non eius repudiandae et dolorum reiciendis totam nobis,
        assumenda error, aliquam porro. Soluta autem facere quidem.
      </h2>
      <nav>
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
