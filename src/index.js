import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { AuhProvider } from "./context/AuthProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuhProvider>
      <App />
    </AuhProvider>
  </React.StrictMode>
)
