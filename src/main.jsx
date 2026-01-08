import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // הסתרנו זמנית
//import StoryPage from './StoryPage.jsx' // הוספנו את החדש
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/*   <StoryPage /> מציגים את דף הסטורי */}
  </React.StrictMode>,
)