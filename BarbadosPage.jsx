import React, { useState } from "react";
import "./App.css";

function App() {
  const itineraries = [
    {
      id: 1,
      title: "Bridgetown City Tour",
      start: "Independence Square",
      end: "George Washington House",
      stops: ["Independence Square", "Bay Street", "George Washington House"],
    },
    {
      id: 2,
      title: "Cave Adventure",
      start: "Harrison's Cave",
      end: "Welchman Hall Gully",
      stops: ["Harrison's Cave", "Welchman Hall Gully"],
    },
    {
      id: 3,
      title: "Garden Escape",
      start: "Hunte's Gardens",
      end: "Coco Hill Forest",
      stops: ["Hunte's Gardens", "Flower Forest", "Coco Hill Forest"],
    },
    {
      id: 4,
      title: "Scenic Coastal Drive",
      start: "Cherry Tree Hill",
      end: "Ragged Point",
      stops: ["Cherry Tree Hill", "Bathsheba", "Ragged Point"],
    },
    {
      id: 5,
      title: "North Coast Adventure",
      start: "Farley Hill Park",
      end: "Animal Flower Cave",
      stops: ["Farley Hill Park", "North Point", "Animal Flower Cave"],
    },
    {
      id: 6,
      title: "Beach Experience",
      start: "Boardwalk",
      end: "Mount Gay",
      stops: ["Boardwalk", "Atlantis Submarine", "Mount Gay"],
    },
  ];

  const [selected, setSelected] = useState(itineraries[0]);

  // Google Maps Navigation Link
  const getMapLink = (trip) => {
    const origin = encodeURIComponent(trip.start);
    const destination = encodeURIComponent(trip.end);
    const waypoints = trip.stops.slice(1, -1).join("|");

    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints}&travelmode=driving`;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🌴 Barbados Travel App</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Left: Itinerary List */}
        <div style={{ width: "40%" }}>
          {itineraries.map((trip) => (
            <div
              key={trip.id}
              onClick={() => setSelected(trip)}
              style={{
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                cursor: "pointer",
                background:
                  selected.id === trip.id ? "#d1f0ff" : "#ffffff",
              }}
            >
              <h3>{trip.title}</h3>
              <p>{trip.start} → {trip.end}</p>
            </div>
          ))}
        </div>

        {/* Right: Details */}
        <div style={{ width: "60%" }}>
          <h2>{selected.title}</h2>

          <p><strong>Start:</strong> {selected.start}</p>
          <p><strong>End:</strong> {selected.end}</p>

          <h3>Stops:</h3>
          <ul>
            {selected.stops.map((stop, index) => (
              <li key={index}>{stop}</li>
            ))}
          </ul>

          <h3>Directions:</h3>
          <ol>
            {selected.stops.map((stop, index) => (
              <li key={index}>Go to {stop}</li>
            ))}
          </ol>

          <br />

          {/* Navigation Button */}
          <a
            href={getMapLink(selected)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 15px",
              background: "blue",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            🚗 Start Navigation (Google Maps)
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;