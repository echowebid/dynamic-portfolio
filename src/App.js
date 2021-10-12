import logo from './logo.svg';
import './App.css';
import { useEffect, useCallback } from 'react';
const contentful = require('contentful');

function App() {
  const fetchApi = useCallback(async () => {
    const client = contentful.createClient({
      space: `${process.env.REACT_APP_SPACE_ID}`,
      accessToken: `${process.env.REACT_APP_ACCESS_TOKEN}`
    });
    const result = await client.getContentTypes();
    console.log(result);
  }, []);
  useEffect(() => {
    fetchApi();
  }, [fetchApi]);
  return (
    <div className="App">
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
