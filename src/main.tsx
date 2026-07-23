import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SectionProvider } from './context/SectionContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import "./i18n";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SectionProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SectionProvider>
  </StrictMode>,
)
