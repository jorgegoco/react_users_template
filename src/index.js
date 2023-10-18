import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { AuhProvider } from "./context/AuthProvider"
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuhProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuhProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
