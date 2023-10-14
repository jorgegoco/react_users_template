import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { AuhProvider } from "./context/AuthProvider"
import { BrowserRouter, Rotes, Route, Routes } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuhProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuhProvider>
    </BrowserRouter>
  </React.StrictMode>
)
