import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Panama() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [showDestinations, setShowDestinations] = useState(false);
  const navigate = useNavigate();
  const savedUser = JSON.parse(localStorage.getItem("triplyUser"));
  const selectedDestination = "Panama";

  const destinationOptions = ["Panama", "Barbados", "Japan", "Madrid"];

  const panamaItems = [
    {
      name: "JW Marriott Panama",
      type: "hotel",
      city: "Panama City",
      location: "Punta Pacífica",
      price: "$260/night",
      rating: "4.6",
      pool: "Yes",
      breakfast: "Available",
      image: "https://imgs.search.brave.com/a6xsQ0h0D6N9A9PfP80Y2m6Q2ilPyyC6ZbhxyiYLwM4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9qd21h/cnJpb3R0cGFuYW1h/cGFuYW1hY2l0eS5w/YS1ob3RlbHMubmV0/L2RhdGEvUGljcy9P/cmlnaW5hbFBob3Rv/LzE3MTYxLzE3MTYx/MDgvMTcxNjEwODYz/MS9waWMtanctbWFy/cmlvdHQtcGFuYW1h/LXBhbmFtYS1jaXR5/LTMxLkpQRUc",
    },
    {
      name: "W Panama",
      type: "hotel",
      city: "Panama City",
      location: "Calle 50 / Aquilino de la Guardia",
      price: "$210/night",
      rating: "4.5",
      pool: "Yes",
      breakfast: "Available",
      image:  "https://imgs.search.brave.com/h-rthbIXspNwJSeauvhsctUWIL83eiKBA3374S6dqgI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bHV4dXJ5bGF0aW5h/bWVyaWNhLmNvbS9w/YW5hbWEvcGhvdG9z/My93LXBhbmFtYS1j/aXR5LXRvcC5qcGc",
    },
    {
      name: "Megapolis Hotel Panamá",
      type: "hotel",
      city: "Panama City",
      location: "Avenida Balboa",
      price: "$145/night",
      rating: "4.1",
      pool: "Yes",
      breakfast: "Available",
      image:
        "https://imgs.search.brave.com/0EyXSaeZz-MHCaYTkurdDBeqv2Y2ddv0OYRp74Le3P4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy85MjAwMDAwMC85/MjAwMDAwMC85MTk5/NTYwMC85MTk5NTU3/NS9kMjg4NDliZi5q/cGc_aW1wb2xpY3k9/Y2Nyb3Amdz0xMDAw/Jmg9NjY2JnE9bWVk/aXVt"
    },
    {
      name: "Hotel Riu Plaza Panama",
      type: "hotel",
      city: "Panama City",
      location: "Bella Vista / Via España",
      price: "$150/night",
      rating: "4.4",
      pool: "Yes",
      breakfast: "Included",
      image:
         "https://imgs.search.brave.com/dYpRc9weagp5eUCvsYs2ire8Qr1OhxVRfvodwcrEZTs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pay5p/bWdraXQubmV0LzN2/bHFzNWF4eGpmL1RQ/L2lrLXNlby9pbWFn/ZXMvOTk5OTk5OTkt/OTk5OS05OTk5LTk5/OTktOTk5OTk5OTk5/OTk5LzU1ZmEwOWU0/LThkOGQtNGM1MS04/Yjc5LThiOTM2ZDA4/NTlhYy9zb3VyY2Uv/SW1hZ2UtUG9vbC1h/dC10aGUtSG90ZWwt/Uml1LVBsYXphLVBh/bmFtYS1QaG90by1D/cmUuanBnP3RyPXct/MTQwMCxoLTY1MCxm/by1hdXRv",
    },
    {
      name: "Hilton Panama",
      type: "hotel",
      city: "Panama City",
      location: "Balboa Avenida / Aquilino de la Guardia",
      price: "$195/night",
      rating: "4.4",
      pool: "Yes",
      breakfast: "Available",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },

    {
      name: "Lazotea",
      type: "restaurant",
      city: "Panama City",
      location: "Casco Antiguo",
      price: "$$$",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    },
    {
      name: "La Tapa del Coco",
      type: "restaurant",
      city: "Panama City",
      location: "Calle 68 Este, San Francisco",
      price: "$$",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    },
    {
      name: "Michael's Restaurant",
      type: "restaurant",
      city: "Panama City",
      location: "Panama City",
      price: "$$",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    },
    {
      name: "Sabroso Panamá",
      type: "restaurant",
      city: "Panama City",
      location: "Isla Perico, Amador Causeway",
      price: "$$",
      rating: "4.5",
      image:
        "https://imgs.search.brave.com/tOjI7Lqngu6SMrm-KEqKfX-LHnMpzqhYtnkD8cbvii8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MWMvYzgvOTMvNDIv/YXJlYS1kZS1ndWF5/YWNhbi5qcGc",
    },
    {
      name: "Osaka Toscana Rooftop",
      type: "restaurant",
      city: "Panama City",
      location: "Panama City",
      price: "$$$",
      rating: "4.7",
      image:
        "https://imgs.search.brave.com/Pt4dVL_2QE9Yik72ObbmSGcZ7OahxYRBcAE1m-sbgcQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kZWd1/c3RhLXBpY3R1cmVz/LWhkLmItY2RuLm5l/dC8xXzEwODQ2Nl9y/XzAuanBnP3Y9OTEz",
    },

    {
      name: "Monkey Island Tour",
      type: "excursion",
      city: "Gamboa",
      location: "Gatun Lake / Panama Canal",
      price: "from $110",
      rating: "4.8",
image: "https://imgs.search.brave.com/pl370Ry4OkQvDs3RcZBc4GXC9Hz96aH6zYnZBCq2n-Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yaWtv/dG91cnNwYW5hbWEu/Y29tL2Nkbi9zaG9w/L2ZpbGVzLzIwMjQw/NTA4XzE4MjY0My5q/cGc_dj0xNzQwNTE1/MTgwJndpZHRoPTE0/NDU",
    },
    {
      name: "San Blas Day Trip",
      type: "excursion",
      city: "Guna Yala",
      location: "San Blas Islands",
      price: "from $110",
      rating: "4.8",
      image: "https://imgs.search.brave.com/ICozrUyfxg9yUKiuLxcAYKoAgtD9JLC0Xq0Z_LTy6vI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l2aXRhdGlzLmNv/bS9mL3BhbmFtYS9j/aXVkYWQtZGUtcGFu/YW1hL2V4Y3Vyc2lv/bi1pc2xhcy1zYW4t/Ymxhcy01ODl4Mzky/LmpwZw",
    },
    {
      name: "Casco Viejo",
      type: "excursion",
      city: "Panama City",
      location: "Casco Antiguo",
      price: "Free",
      rating: "4.7",
      image:
       "https://imgs.search.brave.com/mupdaWoPUgEoy4l9n2AL4MuibpMoHULJERa4KfNV8jg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MDY2NDE2Mi9waG90/by9wYW5hbWEtY2l0/eS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9cU1JcHZBV1Zf/dHIyS0xocjUwMkZO/dlVGSzdYMGhxRkhJ/NGZBaldxLThPRT0",
    },
    {
      name: "Taboga Island",
      type: "excursion",
      city: "Taboga",
      location: "Taboga",
      price: "from $30",
      rating: "4.7",
      image: "https://imgs.search.brave.com/0DHnxm-ZdOYkzxFvv-7UbUqxOtU9inIbx7WZw-7JfsE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhldHJv/cGljYWxpc3RhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMS9UaGluZ3Mt/dG8tZG8taW4tVGFi/b2dhLWlzbGFuZC1Q/YW5hbWEuanBnP2Zp/dD0xMTcwLDY1NyZz/c2w9MQ",
    },
    {
      name: "Afro-Panamanian Cooking Class",
      type: "excursion",
      city: "Panama City",
      location: "Panama City",
      price: "from $35",
      rating: "4.9",
      image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg",
    },
    {
      name: "Slingshot Tour Panama",
      type: "excursion",
      city: "Panama City",
      location: "Panama City",
      price: "$95",
      rating: "4.8",
   image: "https://imgs.search.brave.com/n2oAhwsuNkiTOJ3rvdBYiDOQf84Js2OJfnHBK_Hne5I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aGVh/YnJvYWRndWlkZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMDQvMV9zbGlu/Z3Nob3QtdG91ci1w/YW5hbWEuanBn",
    },
    {
      name: "POIN Panamá",
      type: "excursion",
      city: "Panama City",
      location: "Panama City",
      price: "from $25",
      rating: "4.8",
    image: "https://poinpanama.com/wp-content/uploads/2024/04/MP-Web-Menu-de-productos-Zipline.jpg",
    },

    {
      name: "Taboga Beach",
      type: "beach",
      city: "Taboga",
      location: "Taboga Island",
      price: "Free",
      rating: "4.7",
      pool: "No",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Playa Bonita",
      type: "beach",
      city: "Panama City",
      location: "Panama Bay",
      price: "Free",
      rating: "4.4",
      pool: "No",
      image:
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const filteredItems = useMemo(() => {
    return panamaItems.filter((item) => {
      const matchesType = typeFilter === "all" ? true : item.type === typeFilter;
      const matchesCity = cityFilter === "all" ? true : item.city === cityFilter;
      return matchesType && matchesCity;
    });
  }, [typeFilter, cityFilter]);

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
      <h1 style={styles.logo} onClick={() => console.log("/home")}>
  Alka
</h1>

        <div style={styles.navLinks}>
          <span style={styles.link}>Voting</span>
          <span style={styles.link}>Bill Splitting</span>
          <span style={styles.link}>Support</span>
          <span style={styles.link}>Trips</span>

          <div style={styles.userGreeting}>
          <span>Welcome {savedUser?.firstName || "Guest"}</span>          <span style={styles.locationIcon}>📍</span>
          </div>
        </div>
      </nav>

      <section style={styles.searchSection}>
        <div style={styles.searchBox}>
          <div style={styles.menuRow}>
            <span style={styles.menuItem}>Stays</span>
            <span style={styles.menuItem}>Flights</span>
            <span style={styles.menuItem}>Cars</span>
            <span style={styles.menuItem}>Packages</span>
            <span style={styles.menuItem}>Things to do</span>
          </div>

          <div style={styles.inputsRow}>
            <div style={styles.destinationWrapper}>
              <div
                style={styles.inputBox}
                onClick={() => setShowDestinations(!showDestinations)}
              >
                {selectedDestination}
              </div>

              {showDestinations && (
                <div style={styles.dropdownMenu}>
                  {destinationOptions.map((place) => (
                    <div key={place} style={styles.dropdownItem}>
                      <div style={styles.dropdownCountry}>{place}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={styles.inputBox}>Dates</div>
<div
  style={{
    ...styles.inputBox,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  }}
>
  <div style={styles.travelersLabel}>Travelers</div>
  <div style={styles.travelersValue}>2 travelers, 1 room</div>
</div>

            <button type="button" style={styles.searchBtn}>
              Search
            </button>
          </div>
        </div>
      </section>

      <div style={styles.layout}>
        <aside style={styles.sidebar}>
          <div style={styles.mapCard}>
            <img
              src="https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=300&center=lonlat:-79.5199,8.9824&zoom=10&apiKey=demo"
              alt="Panama map"
              style={styles.mapImage}
            />
            <div style={styles.mapLabel}>View in a map</div>
          </div>

          <h2 style={styles.sidebarTitle}>Filter by</h2>

          <div style={styles.filterGroup}>
            <button style={styles.filterBtn} onClick={() => setTypeFilter("all")}>
              All
            </button>
            <button style={styles.filterBtn} onClick={() => setTypeFilter("hotel")}>
              Hotels
            </button>
            <button
              style={styles.filterBtn}
              onClick={() => setTypeFilter("restaurant")}
            >
              Restaurants
            </button>
            <button
              style={styles.filterBtn}
              onClick={() => setTypeFilter("excursion")}
            >
              Excursions
            </button>
            <button style={styles.filterBtn} onClick={() => setTypeFilter("beach")}>
              Beaches
            </button>
          </div>

          <div style={styles.filterGroup}>
            <button style={styles.filterBtn} onClick={() => setCityFilter("all")}>
              All cities
            </button>
            <button
              style={styles.filterBtn}
              onClick={() => setCityFilter("Panama City")}
            >
              Panama City
            </button>
            <button style={styles.filterBtn} onClick={() => setCityFilter("Taboga")}>
              Taboga
            </button>
            <button style={styles.filterBtn} onClick={() => setCityFilter("Gamboa")}>
              Gamboa
            </button>
            <button
              style={styles.filterBtn}
              onClick={() => setCityFilter("Guna Yala")}
            >
              Guna Yala
            </button>
          </div>
        </aside>

        <main style={styles.main}>
          <h1 style={styles.pageTitle}>Panama</h1>

          {filteredItems.map((item) => (
  <div key={item.name} style={styles.card}>
    {item.image && (
      <img src={item.image} alt={item.name} style={styles.cardImage} />
    )}

    <div style={styles.cardText}>
      <h3 style={styles.cardTitle}>{item.name}</h3>
      <p style={styles.meta}>{item.location}</p>
      <p style={styles.meta}>{item.city}</p>
      <p style={styles.meta}>Price: {item.price}</p>
      <p style={styles.meta}>Rating: {item.rating}</p>

      {item.type === "hotel" && (
        <p style={styles.meta}>
          Pool: {item.pool} · Breakfast: {item.breakfast}
        </p>
      )}

      {item.type === "beach" && (
        <p style={styles.meta}>Pool: {item.pool}</p>
      )}
    </div>
  </div>
))}
        </main>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8f8f8",
    fontFamily: "Arial, sans-serif",
    color: "#1f2a44",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #eee",
  },

  logo: {
    margin: 0,
    fontSize: "34px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #f7a8b8, #fcbf8f)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
    fontSize: "16px",
  },

  link: {
    color: "#000",
    cursor: "pointer",
  },

  userGreeting: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "600",
    color: "black",
  },

  locationIcon: {
    fontSize: "18px",
    color: "#dd81cd",
  },

  searchSection: {
    padding: "20px 20px 8px",
  },

  searchBox: {
    maxWidth: "1850px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "24px",
    padding: "18px 22px",
    border: "1px solid #eee",
  },

  menuRow: {
    display: "flex",
    justifyContent: "center",
    gap: "44px",
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "16px",
    flexWrap: "wrap",
    color: "#000",
  },

  menuItem: {
    color: "#000",
  },

  inputsRow: {
    display: "grid",
    gridTemplateColumns: "260px 260px 290px 150px",
    gap: "16px",
    alignItems: "center",
    justifyContent: "center",
  },

  destinationWrapper: {
    position: "relative",
  },

  inputBox: {
    padding: "0 16px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#fff",
    color: "#1f2a44",
    fontSize: "15px",
    cursor: "pointer",
    height: "52px",
    display: "flex",
    alignItems: "center",
  },

  travelersLabel: {
    fontSize: "12px",
    color: "#4b5563",
    lineHeight: 1.1,
    marginBottom: "4px",
  },

  travelersValue: {
    fontSize: "15px",
    color: "#1f2a44",
    fontWeight: "600",
    lineHeight: 1.2,
  },

  dropdownMenu: {
    position: "absolute",
    top: "58px",
    left: 0,
    width: "100%",
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    zIndex: 20,
    overflow: "hidden",
  },

  dropdownItem: {
    padding: "14px 16px",
    borderBottom: "1px solid #f1f1f1",
    cursor: "pointer",
  },

  dropdownCountry: {
    fontWeight: "600",
    color: "#1f2a44",
  },

  searchBtn: {
    height: "52px",
    backgroundColor: "#e7a0b1",
    color: "#000",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "16px",
    padding: "0 22px",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "320px 1fr",
    gap: "24px",
    padding: "16px 20px 20px",
    alignItems: "start",
  },

  sidebar: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  mapCard: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "22px",
    overflow: "hidden",
  },

  mapImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    display: "block",
  },

  mapLabel: {
    textAlign: "center",
    padding: "16px",
    fontSize: "18px",
    color: "#2563eb",
    background: "#fff",
  },

  sidebarTitle: {
    fontSize: "28px",
    margin: "4px 0 0 0",
  },

  filterGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "22px",
    padding: "18px",
  },

  filterBtn: {
    border: "1px solid #ddd",
    background: "#fff",
    borderRadius: "12px",
    padding: "16px 18px",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "18px",
    color: "#000",
  },

  main: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  pageTitle: {
    fontSize: "48px",
    lineHeight: 1.1,
    margin: "0 0 10px 0",
    fontWeight: "700",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "24px",
    border: "1px solid #ddd",
    borderRadius: "24px",
    background: "#fff",
  },

  cardText: {
    flex: 1,
  },

  cardTitle: {
    fontSize: "30px",
    fontWeight: "700",
    margin: "0 0 10px 0",
    color: "#1f2a44",
  },

  meta: {
    fontSize: "18px",
    margin: "6px 0",
  },

  cardImage: {
    width: "260px",
    height: "190px",
    objectFit: "cover",
    borderRadius: "18px",
    flexShrink: 0,
  },
};