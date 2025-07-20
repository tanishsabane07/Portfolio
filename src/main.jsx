import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Load only Latin subset to avoid Devanagari fonts (~150KB savings)
import '@fontsource/poppins/latin-400.css';  // Regular - Latin only
import '@fontsource/poppins/latin-600.css';  // Semi-bold - Latin only  
import '@fontsource/poppins/latin-700.css';  // Bold - Latin only

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
