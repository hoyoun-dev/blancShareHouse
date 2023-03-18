import logo from './logo.svg';
import './App.css';
import {BrowserView, MobileView} from 'react-device-detect' ;

const App = () => {
  return (
    <div className="App">
      <BrowserView>
        데스크톱!
      </BrowserView>
        <MobileView>
            모바일!
        </MobileView>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
