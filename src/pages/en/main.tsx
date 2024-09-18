import { createRoot } from 'react-dom/client'
import './index.css'
import '../../App.css'

import Loading from '../../components/Loading'

createRoot(document.getElementById('root')!).render(
  <div>
    en
    <Loading />
  </div>
)
