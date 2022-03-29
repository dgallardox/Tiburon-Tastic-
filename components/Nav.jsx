import Link from "next/link";

export default function Nav(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Tiburontastic!</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="navbar-nav">
            <Link href="/"><a className={props.home}>Home</a></Link>
            <Link href="/sharks"><a className={props.sharks}>Sharks</a></Link>
            <Link href="/blog"><a className={props.blog}>Blog</a></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}