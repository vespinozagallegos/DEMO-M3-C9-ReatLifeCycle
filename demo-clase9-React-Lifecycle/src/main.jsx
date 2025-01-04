import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import AppComponentDidMount from './AppComponentDidMount.jsx'
import AppComponentDidMount2 from './AppComponentDidUpdate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppComponentDidMount/> */}
    <AppComponentDidMount2/>
  </StrictMode>,
)
