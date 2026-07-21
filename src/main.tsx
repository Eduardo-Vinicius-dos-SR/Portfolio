import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SectionProvider } from './context/SectionContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SectionProvider>
    <App />
    </SectionProvider>
  </StrictMode>,
)
