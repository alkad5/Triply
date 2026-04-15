import { destinations } from "../data/destinations.js"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 42, marginBottom: 10 }}>Triply 🌍</h1>
      <p style={{ color: "gray", marginBottom: 30 }}>
        Discover your next destination
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20
        }}
      >
        {destinations.map((place) => (
          <div
            key={place.id}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "transform 0.2s"
            }}
            onClick={() => navigate(`/destination/${place.id}`)}
          >
            {/* IMAGE */}
            <img
              src={place.image}
              alt={place.city}
              style={{
                width: "100%",
                height: 160,
                objectFit: "cover"
              }}
            />

            {/* CONTENT */}
            <div style={{ padding: 15 }}>
              <h2 style={{ margin: 0 }}>{place.city}</h2>
              <p style={{ margin: "5px 0", color: "gray" }}>
                {place.country}
              </p>
              <p style={{ fontSize: 14 }}>{place.description}</p>

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
          </div>
        ))}
      </div>
    </div>
  )
}