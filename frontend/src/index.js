import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Icons ke liye

export default function setup() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
}

setup(); // Call the function to render