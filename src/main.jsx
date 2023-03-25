import React from 'react'
import ReactDOM from 'react-dom/client' //why client
import App from './App'
import './index.css' //why

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
