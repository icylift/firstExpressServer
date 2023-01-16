import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'



// this is how you create a react app in a folder = $ npx create-react-app .

// axios.get("/users")  to get data from custom api(through proxy in package.json)

// axios.get("http://rickandmortyapi.com")  to get data from 3rd person api

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

