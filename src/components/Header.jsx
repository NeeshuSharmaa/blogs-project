import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>The Weirdo Blogs</h1>
      {/* <img className="header-img" src="images/header-img.jpg" /> */}
      <nav>
        <ul>
          <Link to="/">
            <li className="nav-list">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-list">About the Author</li>
          </Link>
          <Link to="/create">
            <li className="nav-list">Add Blog</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
