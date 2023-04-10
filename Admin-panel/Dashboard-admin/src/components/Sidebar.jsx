import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("Login");
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("Login");
    if (!isLogin) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/banner">
                  Banner
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/collection">
                  Collection
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={logout}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
