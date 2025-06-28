import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../public/assets/css/style.css'
import router from './router'
import { RouterProvider } from 'react-router'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
