import Image from "next/image";
import Article from "./Article";

function Latest() {
  return (
    <section>
      <header className="major">
        <h2>Ipsum sed dolor</h2>
      </header>
      <div className="posts">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
};

export default Latest;
