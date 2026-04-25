import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          🎬 CineBook
        </Link>

        <div className="ms-auto d-flex gap-2">
          <Link to="/" className="btn btn-outline-light">
            Home
          </Link>

          <Link to="/login" className="btn btn-primary">
            Login
          </Link>

          <Link to="/register" className="btn btn-success">
            Register
          </Link>

          <Link to="/admin" className="btn btn-warning">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;