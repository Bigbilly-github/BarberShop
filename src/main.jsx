import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './pages/homepage.jsx'
import ContactUs from './pages/contact us.jsx'
import Services from './pages/services.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Homepage/>
  },
  {
    path:"/contactus",
    element: <ContactUs/>
  },
  {
    path:"/services",
    element: <Services/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
