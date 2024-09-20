import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navbar } from './componencts/Navabar.tsx'
import { Contact } from './componencts/Contact.tsx'
import { Body } from './componencts/Body.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Contact/>
    <Body/>
    <App />
  </StrictMode>,
)
