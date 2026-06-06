import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@fontsource/montserrat/400.css'   // Regular
import '@fontsource/montserrat/500.css'   // Medium  
import '@fontsource/montserrat/600.css'   // SemiBold
import '@fontsource/montserrat/700.css'   // Bold
import '@fontsource/montserrat/800.css'   // ExtraBold

import '@fontsource/montserrat/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)