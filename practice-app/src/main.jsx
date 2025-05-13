import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './../public/assets/css/style.css'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="Akash"/>
  </StrictMode>,
)
