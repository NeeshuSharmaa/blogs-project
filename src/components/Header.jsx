import { Link } from "react-router-dom";

export default function Header({ setLoggedIn, imageDisplay }) {
  return (
    <header>
      <h1>Intros-Blog World</h1>
      {imageDisplay ? (
        <img className="header-img" src="images/header-img.jpg" />
      ) : (
        "null"
      )}
      <nav>
        <ul className="nav-div">
          <Link to="/home">
            <li className="nav-list">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-list">About the Author</li>
          </Link>
          <Link to="/create">
            <li className="nav-list">Add Blog</li>
          </Link>
        </ul>
        <div>
          <Link to="/">
            <button className="logout-btn" onClick={() => setLoggedIn(false)}>
              Logout
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
