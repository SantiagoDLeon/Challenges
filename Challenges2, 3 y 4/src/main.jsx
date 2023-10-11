import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FirstApp from './FirstApp.jsx'
import CounterApp from './CounterApp.jsx'
import CounterApp2 from './CounterApp2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp /> /*challenge2*/
    <CounterApp />/*challenge3*/
    <CounterApp2 />/*challenge4*/
  </React.StrictMode>,
)
