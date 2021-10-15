import './App.css';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-210297258-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Música de Costa Rica </h1>
        <h4>(Proyecto en desarrollo)</h4>
        Siguenos en Instagram!
        {/* {'\n'} */}
        <a
          className="App-link"
          href="https://www.instagram.com/MusicaDeCostaRica/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @MusicaDeCostaRica
        </a>
      </header>
    </div>
  );
}

export default App;
