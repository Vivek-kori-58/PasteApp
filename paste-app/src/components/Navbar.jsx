import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Paste App
          </a>
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex link-group ">
              <NavLink className="nav-link nav-links " aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link nav-links " aria-current="page" to="/pastes">
                Pastes
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
