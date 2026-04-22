import { Routes, Route } from "react-router-dom"
import Home from "./pages/homepage.jsx"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}