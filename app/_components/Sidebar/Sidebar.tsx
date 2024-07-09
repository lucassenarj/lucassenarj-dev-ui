import Image from "next/image";
import Search from "./Search";
import Nav from "./Nav";
import About from "./About";
import Popular from "./Popular";

function Sidebar() {
  return (
    <div className="inner">
      <About />
      <Search />
      <Nav />

      <section>
        <header className="major">
          <h2>Ante interdum</h2>
        </header>
        <div className="mini-posts">
          <Popular />
          <Popular />
          <Popular />
          <Popular />
        </div>
      </section>

      

      <footer id="footer">
        <p className="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
      </footer>

    </div>
  );
}

export default Sidebar;
