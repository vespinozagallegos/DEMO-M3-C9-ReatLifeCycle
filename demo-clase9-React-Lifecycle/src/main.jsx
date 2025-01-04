import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import AppComponentDidMount from './AppComponentDidMount.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppComponentDidMount/>
  </StrictMode>,
)
