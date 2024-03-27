import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HeaderProvider } from './providers/HeaderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderProvider>
      <App />
    </HeaderProvider>
  </React.StrictMode>,
)
