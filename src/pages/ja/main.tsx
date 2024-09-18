import { createRoot } from 'react-dom/client'
import './index.css'
import '../../App.css'

import Toast from '../../components/Toast'

import App from '../../App'

createRoot(document.getElementById('root')!).render(
  <div>
    123
    <App />
    <Toast />
  </div>
)
