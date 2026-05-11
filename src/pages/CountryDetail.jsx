import { Link, useParams } from 'react-router-dom';

function CountryDetail() {
  const { code } = useParams();

  return (
    <section className="page">
      <Link className="back-link" to="/">
        Zurück zur Startseite
      </Link>

      <div className="placeholder-card">
        <h1>Länderdetails</h1>
        <p>
          Aktueller Ländercode aus der URL: <strong>{code}</strong>
        </p>
        <p>
          Die Detaildaten werden später über die REST Countries API geladen.
        </p>
      </div>
    </section>
  );
}

export default CountryDetail;
