import Header from './components/Header';
import AppRouter from './Router';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
