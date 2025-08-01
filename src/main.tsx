import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.scss'
import { App } from './app/app'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
