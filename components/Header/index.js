import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{ background: "transparent" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image
              src="/teslaLogo.svg"
              alt="Logo"
              width={`120px`}
              height={`20px`}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">&larr;</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    MODEL S
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    MODEL 3
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    MODEL X
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    MODEL Y
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    SOLAR ROOF
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    SOLAR PANEL
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav m-right mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link href="/shop">
                  <a className="nav-link active" aria-current="page">
                    SHOP
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/account">
                  <a className="nav-link active" aria-current="page">
                    TESLA ACCOUNT
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
