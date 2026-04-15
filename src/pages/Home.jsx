import { useState } from "react"

export default function Home() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  return (
    <div style={{ padding: 40 }}>
      <h1>Triply ✈️</h1>

      <input
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <input
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <button onClick={() => alert(`${from} → ${to}`)}>
        Search Trips
      </button>
    </div>
  )
}