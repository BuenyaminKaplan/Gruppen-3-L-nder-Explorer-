import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="page page--center">
      <div className="placeholder-card">
        <p className="error-code">404</p>
        <h1>Seite nicht gefunden</h1>
        <p>Die gesuchte Seite gibt es leider nicht.</p>
        <Link className="button-link" to="/">
          Zurück zur Startseite
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
