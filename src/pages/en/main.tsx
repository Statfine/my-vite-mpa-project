import { createRoot } from 'react-dom/client'
import App from './app.tsx'
import '../../App.css'

console.log('import.meta.env.VITE_VERSION ', import.meta.env.VITE_VERSION)
createRoot(document.getElementById('root')!).render(<App />)
