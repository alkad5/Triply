import { destinations } from "../data/destinations.js"

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 40 }}>Triply 🌍</h1>

      <p style={{ marginBottom: 20, color: "gray" }}>
        Discover amazing destinations around the world
      </p>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20
        }}
      >
        {destinations.map((place) => (
          <div
            key={place.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 20,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "0.2s",
              cursor: "pointer"
            }}
          >
            <h2 style={{ marginBottom: 5 }}>{place.city}</h2>
            <h4 style={{ margin: 0, color: "gray" }}>{place.country}</h4>

            <p style={{ marginTop: 10 }}>{place.description}</p>

            <button
              style={{
                marginTop: 10,
                padding: "8px 12px",
                borderRadius: 8,
                border: "none",
                background: "#0077ff",
                color: "white",
                cursor: "pointer"
              }}
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}