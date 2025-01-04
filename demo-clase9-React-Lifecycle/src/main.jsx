import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import AppComponentDidMount from './AppComponentDidMount.jsx'
import AppComponentDidMount2 from './AppComponentDidUpdate.jsx'
// import AppComponentDidMount3 from './AppComponentWillUnmount.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppComponentDidMount/> */}
    <AppComponentDidMount2/>
    {/* <AppComponentDidMount3/> */}
  </StrictMode>,
)
