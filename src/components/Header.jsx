export default function Header() {
  return (
    <header>
      <h1>The Weirdo Blogs</h1>
      <img className="header-img" src="images/header-img.jpg" />
      <nav>
        <ul>
          <li className="nav-list">Home</li>
          <li className="nav-list">About the Author</li>
          <li className="nav-list">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
