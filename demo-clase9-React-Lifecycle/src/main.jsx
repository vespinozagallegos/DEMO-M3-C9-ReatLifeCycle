import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './ClassComponents/Estructura y definiciones/App'
// import AppComponentDidMount from './ClassComponents/AppComponentDidMount'
// import AppComponentDidMount2 from './ClassComponents/AppComponentDidUpdate.jsx'
import AppComponentDidMount3 from './ClassComponents/AppComponentWillUnmount.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppComponentDidMount/> */}
    {/* <AppComponentDidMount2/> */}
    <AppComponentDidMount3/>
  </StrictMode>,
)
