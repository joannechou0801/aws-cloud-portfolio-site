import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage/HomePage.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <p>這是 CI/CD 測試更新</p>
    <HomePage />
  </React.StrictMode>
)
