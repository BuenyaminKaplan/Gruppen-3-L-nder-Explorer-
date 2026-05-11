import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__logo" to="/">
          Länder-Explorer
        </Link>

        <nav className="site-header__nav" aria-label="Hauptnavigation">
          <Link className="site-header__link" to="/">
            Startseite
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
