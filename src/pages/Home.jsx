function Home() {
  return (
    <section className="page">
      <div className="hero">
        <h1>Länder-Explorer</h1>
        <p>
          Entdecke Länder weltweit und sieh dir später Informationen wie
          Hauptstadt, Region, Bevölkerung und Flagge an.
        </p>
      </div>

      <section className="placeholder-card" aria-labelledby="countries-title">
        <h2 id="countries-title">Länderübersicht</h2>
        <p>
          Hier erscheinen im nächsten Schritt die Länder-Karten mit Suche,
          Filter und Sortierung.
        </p>
      </section>
    </section>
  );
}

export default Home;
