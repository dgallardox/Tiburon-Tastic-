import Link from "next/link";

export default function Nav(props) {
  return (
    // main navbar - problem is the drop down
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">


      <div className="container-fluid">
        {/* Site Title */}
        <Link href="/">
          <a className="navbar-brand">Tiburontastic!</a>
        </Link>

        {/* Mobile nav button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* shows / hides div based on button click */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* Div for nav-links */}
          <div className="navbar-nav">
            {/* Link one */}
            <Link href="/"><a className={props.home}>Home</a></Link>
            {/* Link two */}
            <Link href="/blog"><a className={props.blog}>Blog</a></Link>
            <Link href="/submit"><a className={props.submit}>Submit</a></Link>
          </div>
        </div>
      </div>

    </nav>
  );
}