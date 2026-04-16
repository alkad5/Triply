import React, { useState } from "react";


export default function HomePage() {
  const [showTravelers, setShowTravelers] = useState(false);
  const [activeTab, setActiveTab] = useState("Beach");
const [adults, setAdults] = useState(2);
const [children, setChildren] = useState(0);
const [rooms, setRooms] = useState(1);
const [activeBestTimeTab, setActiveBestTimeTab] = useState("Panama");
  const [showDestinations, setShowDestinations] = useState(false);
const [showCalendar, setShowCalendar] = useState(false);
const [selectedDate, setSelectedDate] = useState("");

const monthsToShow = [];
const today = new Date();
const startMonth = today.getMonth();
const startYear = today.getFullYear();

for (let i = 0; i < 12; i++) {
  const date = new Date(startYear, startMonth + i, 1);
  monthsToShow.push({
    month: date.toLocaleString("default", { month: "long" }),
    year: date.getFullYear(),
    monthIndex: date.getMonth(),
  });
}

function getDaysInMonth(monthIndex, year) {
  const days = new Date(year, monthIndex + 1, 0).getDate();
  return Array.from({ length: days }, (_, i) => i + 1);
}

function handleDateClick(day, month, year) {
  setSelectedDate(`${month} ${day}, ${year}`);
  setShowCalendar(false);
}
  const destinationOptions = [
    { country: "Japan", hotel: "Park Hotel Tokyo" },
    { country: "Madrid", hotel: "Hotel Riu Plaza España" },
    { country: "Barbados", hotel: "Hilton Barbados Resort" },
    { country: "Panama", hotel: "Hotel La Compañía" },
  ];
  const bestTimeData = {
  Panama: [
    { month: "January", price: "$95 - $180" },
    { month: "February", price: "$100 - $185" },
    { month: "March", price: "$105 - $190" },
    { month: "April", price: "$90 - $170" },
    { month: "May", price: "$80 - $150" },
    { month: "June", price: "$75 - $145" },
    { month: "July", price: "$75 - $150" },
    { month: "August", price: "$80 - $155" },
    { month: "September", price: "$78 - $148" },
    { month: "October", price: "$82 - $152" },
    { month: "November", price: "$88 - $165" },
    { month: "December", price: "$110 - $210" },
  ],

  Madrid: [
    { month: "January", price: "$110 - $190" },
    { month: "February", price: "$115 - $195" },
    { month: "March", price: "$125 - $210" },
    { month: "April", price: "$145 - $240" },
    { month: "May", price: "$155 - $255" },
    { month: "June", price: "$165 - $270" },
    { month: "July", price: "$150 - $250" },
    { month: "August", price: "$145 - $245" },
    { month: "September", price: "$160 - $265" },
    { month: "October", price: "$150 - $250" },
    { month: "November", price: "$125 - $210" },
    { month: "December", price: "$135 - $225" },
  ],

  Japan: [
    { month: "January", price: "$95 - $175" },
    { month: "February", price: "$100 - $180" },
    { month: "March", price: "$125 - $230" },
    { month: "April", price: "$145 - $260" },
    { month: "May", price: "$135 - $240" },
    { month: "June", price: "$115 - $200" },
    { month: "July", price: "$120 - $210" },
    { month: "August", price: "$125 - $220" },
    { month: "September", price: "$118 - $205" },
    { month: "October", price: "$130 - $225" },
    { month: "November", price: "$120 - $210" },
    { month: "December", price: "$135 - $235" },
  ],

  Barbados: [
    { month: "January", price: "$220 - $420" },
    { month: "February", price: "$230 - $430" },
    { month: "March", price: "$215 - $400" },
    { month: "April", price: "$190 - $360" },
    { month: "May", price: "$170 - $320" },
    { month: "June", price: "$160 - $295" },
    { month: "July", price: "$165 - $300" },
    { month: "August", price: "$170 - $310" },
    { month: "September", price: "$155 - $285" },
    { month: "October", price: "$160 - $290" },
    { month: "November", price: "$185 - $345" },
    { month: "December", price: "$240 - $460" },
  ],

  "New York": [],
  Chicago: [],
  Nashville: [],
  "San Diego": [],
  Orlando: [],
};

  const beachPlaces = [
    {
      name: "Bocas del Toro",
      location: "Panama",
      price: "120",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      tag: "Island escape",
    },
    {
      name: "Brandons Beach",
      location: "Barbados",
      price: "$260",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      tag: "Caribbean calm",
    },
    {
      name: "San Juan",
      location: "Puerto Rico",
      price: "$190",
      image:
       "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      tag: "Coastal culture",
    },
    {
      name: "Lanikai Beach",
      location: "Hawaii, United States",
      price: "$355",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      tag: "Tropical calm",
    },
  ];
  const culturePlaces = [
  {
    name: "Madrid",
    location: "Spain",
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1200&auto=format&fit=crop",
    tag: "Art & culture",
  },
  {
    name: "Osaka",
    location: "Japan",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1200&auto=format&fit=crop",
    tag: "Street food & nightlife",
  },
  {
    name: "Rome",
    location: "Italy",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1200&auto=format&fit=crop",
    tag: "Historic landmarks",
  },
  {
    name: "Cairo",
    location: "Egypt",
    price: "$90",
    image:
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=1200&auto=format&fit=crop",
    tag: "Ancient wonders",
  },
];
const displayedPlaces =
  activeTab === "Culture" ? culturePlaces : beachPlaces;
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <h1 style={styles.logo}>Triply</h1>

        <div style={styles.navLinks}>
          <span style={styles.link}>Voting</span>
          <span style={styles.link}>Bill Splitting</span>
          <span style={styles.link}>Support</span>
          <span style={styles.link}>Trips</span>

          <div style={styles.userGreeting}>
            <span>Welcome Alka</span>
            <span style={styles.locationIcon}>📍</span>
          </div>
        </div>
      </nav>

      <section style={styles.hero}>
        <h2 style={styles.heroText}>Your next trip starts here</h2>

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
                Where to?
              </div>

              {showDestinations && (
                <div style={styles.dropdownMenu}>
                  {destinationOptions.map((place, index) => (
                    <div key={index} style={styles.dropdownItem}>
                      <div style={styles.dropdownCountry}>{place.country}</div>
                      <div style={styles.dropdownHotel}>{place.hotel}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

<div style={styles.dateWrapper}>
  <div
    style={{
      ...styles.inputBox,
      border: showCalendar ? "2px solid #eb9757ff" : "1px solid #ddd",
    }}
    onClick={() => setShowCalendar((prev) => !prev)}
  >
    {selectedDate || "Dates"}
  </div>

  {showCalendar && (
    <div style={styles.calendarDropdown}>
      <div style={styles.bestTimePanel}>
        <h2 style={styles.bestTimeTitle}>
          Discover the best time to book your next stay
        </h2>

        <div style={styles.bestTimeTabs}>
          {[
            "Panama",
            "Madrid",
            "Japan",
            "Barbados",
            "New York",
            "Chicago",
            "Nashville",
            "San Diego",
            "Orlando",
          ].map((place) => (
            <span
              key={place}
              style={
                activeBestTimeTab === place
                  ? styles.bestTimeActiveTab
                  : styles.bestTimeTab
              }
              onClick={() => setActiveBestTimeTab(place)}
            >
              {place}
            </span>
          ))}
        </div>

        <div style={styles.bestTimeRows}>
          {bestTimeData[activeBestTimeTab]?.length ? (
            bestTimeData[activeBestTimeTab].map((item) => (
              <div key={item.month} style={styles.bestTimeRow}>
                <span style={styles.bestTimeMonth}>{item.month}</span>
                <span style={styles.bestTimePrice}>{item.price}</span>
              </div>
            ))
          ) : (
            <div style={styles.bestTimeEmpty}>No date pricing added yet.</div>
          )}
        </div>
      </div>
    </div>
  )}
</div>           <div style={styles.travelersWrapper}>
  <div
    style={styles.inputBox}
    onClick={() => setShowTravelers(!showTravelers)}
  >
    <div style={styles.travelersLabel}>Travelers</div>
    <div style={styles.travelersValue}>
      {adults + children} travelers, {rooms} room
      {rooms > 1 ? "s" : ""}
    </div>
  </div>

  {showTravelers && (
    <div style={styles.travelersDropdown}>
      <h3 style={styles.travelersTitle}>Room 1</h3>

      <div style={styles.counterRow}>
        <div>
          <div style={styles.counterLabel}>Adults</div>
        </div>

        <div style={styles.counterControls}>
          <button
            style={styles.circleBtn}
            onClick={() => setAdults(Math.max(1, adults - 1))}
          >
            −
          </button>
          <span style={styles.counterNumber}>{adults}</span>
          <button
            style={styles.circleBtn}
            onClick={() => setAdults(adults + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div style={styles.counterRow}>
        <div>
          <div style={styles.counterLabel}>Children</div>
          <div style={styles.counterSubtext}>Ages 0 to 17</div>
        </div>

        <div style={styles.counterControls}>
          <button
            style={styles.circleBtn}
            onClick={() => setChildren(Math.max(0, children - 1))}
          >
            −
          </button>
          <span style={styles.counterNumber}>{children}</span>
          <button
            style={styles.circleBtn}
            onClick={() => setChildren(children + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div
        style={styles.addRoomText}
        onClick={() => setRooms(rooms + 1)}
      >
        Add another room
      </div>

      <div style={styles.travelersFooter}>
        <span style={styles.footerLink}>Need to book 9 or more rooms?</span>
        <button
          style={styles.doneBtn}
          onClick={() => setShowTravelers(false)}
        >
          Done
        </button>
      </div>
    </div>
  )}
</div>
            <button style={styles.searchBtn}>Search</button>
          </div>
        </div>
      </section>

      <section style={styles.staysSection}>
        <h2 style={styles.sectionTitle}>Stays for every travel style</h2>
        <p style={styles.sectionSubtitle}>
          Average prices based on current calendar month
        </p>

       <div style={styles.tabs}>
  <span
    style={activeTab === "Beach" ? styles.activeTab : styles.tab}
    onClick={() => setActiveTab("Beach")}
  >
    Beach
  </span>

  <span
    style={activeTab === "Culture" ? styles.activeTab : styles.tab}
    onClick={() => setActiveTab("Culture")}
  >
    Culture
  </span>

  <span
    style={activeTab === "Ski" ? styles.activeTab : styles.tab}
    onClick={() => setActiveTab("Ski")}
  >
    Ski
  </span>

  <span
    style={activeTab === "Family" ? styles.activeTab : styles.tab}
    onClick={() => setActiveTab("Family")}
  >
    Family
  </span>

  <span
    style={activeTab === "Wellness" ? styles.activeTab : styles.tab}
    onClick={() => setActiveTab("Wellness")}
  >
    Wellness and Relaxation
  </span>
</div>

       <div style={styles.cardGrid}>
  {displayedPlaces.map((place) => (
            <div key={place.name} style={styles.card}>
              <div style={styles.imageWrap}>
                <img src={place.image} alt={place.name} style={styles.cardImage} />
                <span style={styles.tag}>{place.tag}</span>
              </div>

              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{place.name}</h3>
                <p style={styles.cardLocation}>{place.location}</p>
                <p style={styles.cardPrice}>{place.price}</p>
                <p style={styles.cardNight}>avg per night</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    fontFamily: "Arial, sans-serif",
    color: "#000",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #eee",
  },

  logo: {
    margin: 0,
    fontSize: "36px",
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
    color: "#dd81cdff",
    cursor: "pointer",
  },

  hero: {
    padding: "50px 40px",
    backgroundColor: "#ffffff",
  },

  heroText: {
    textAlign: "center",
    color: "#000",
    fontSize: "48px",
    marginBottom: "40px",
    fontWeight: "normal",
  },

  searchBox: {
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "30px",
    border: "1px solid #eee",
  },

  menuRow: {
    display: "flex",
    justifyContent: "center",
    gap: "35px",
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "30px",
    flexWrap: "wrap",
    color: "#000",
  },

  menuItem: {
    color: "#000",
  },

  inputsRow: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  destinationWrapper: {
    position: "relative",
    flex: "1",
    minWidth: "220px",
  },

  inputBox: {
    flex: "1",
    minWidth: "220px",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "18px",
    cursor: "pointer",
  },

  dropdownMenu: {
    position: "absolute",
    top: "60px",
    left: 0,
    width: "100%",
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    zIndex: 10,
    overflow: "hidden",
  },

  dropdownItem: {
    padding: "14px",
    borderBottom: "1px solid #f1f1f1",
    background: "white",
  },

  dropdownCountry: {
    fontWeight: "600",
  },

  dropdownHotel: {
    fontSize: "14px",
    color: "#777",
    marginTop: "4px",
  },

  searchBtn: {
    padding: "16px 28px",
    backgroundColor: "#f7a8b8",
    color: "#000",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
  },

  staysSection: {
    padding: "40px",
  },

  sectionTitle: {
    fontSize: "42px",
    color: "#1f2a44",
    marginBottom: "8px",
  },

  sectionSubtitle: {
    fontSize: "20px",
    color: "#333",
    marginBottom: "24px",
  },

  tabs: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    borderBottom: "1px solid #ddd",
    paddingBottom: "12px",
    marginBottom: "24px",
  },

  activeTab: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#eb9757ff",
    borderBottom: "3px solid #1668e3",
    paddingBottom: "10px",
  },

  tab: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#1f2a44",
    paddingBottom: "10px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
  },

  imageWrap: {
    position: "relative",
  },

  cardImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "18px",
  },

  tag: {
    position: "absolute",
    top: "14px",
    left: "14px",
    backgroundColor: "#111827",
    color: "white",
    padding: "8px 12px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
  },

  cardBody: {
    paddingTop: "16px",
  },

  cardTitle: {
    margin: "0 0 8px 0",
    fontSize: "22px",
    color: "#1f2a44",
  },

  cardLocation: {
    margin: "0 0 14px 0",
    fontSize: "16px",
    color: "#444",
  },

  cardPrice: {
    margin: "0",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#1f2a44",
  },

  cardNight: {
    marginTop: "4px",
    fontSize: "16px",
    color: "#444",
  },
  dateWrapper: {
  position: "relative",
  flex: "1",
  minWidth: "220px",
},

calendarDropdown: {
  position: "absolute",
  top: "78px",
  left: "-180px",
  width: "1100px",
  maxHeight: "650px",
  overflowY: "auto",
  background: "white",
  border: "1px solid #ddd",
  borderRadius: "20px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
  zIndex: 999,
  padding: "20px",
},

calendarHeader: {
  fontSize: "28px",
  fontWeight: "600",
  marginBottom: "20px",
  color: "#1f2a44",
},

calendarMonths: {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "24px",
},

calendarMonthBlock: {
  border: "1px solid #eee",
  borderRadius: "16px",
  padding: "18px",
},

calendarMonthTitle: {
  margin: "0 0 16px 0",
  fontSize: "26px",
  color: "#1f2a44",
},

calendarGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "10px",
},

dayButton: {
  border: "none",
  background: "#f8f8f8",
  borderRadius: "10px",
  padding: "12px 0",
  fontSize: "16px",
  cursor: "pointer",
  color: "#1f2a44",
},
travelersWrapper: {
  position: "relative",
  flex: "1",
  minWidth: "220px",
},

travelersLabel: {
  fontSize: "16px",
  color: "#1f2a44",
  marginBottom: "6px",
},

travelersValue: {
  fontSize: "18px",
  color: "#1f2a44",
},

travelersDropdown: {
  position: "absolute",
  top: "70px",
  right: 0,
  width: "420px",
  background: "white",
  border: "1px solid #ddd",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  zIndex: 20,
  padding: "28px",
},

travelersTitle: {
  fontSize: "22px",
  color: "#1f2a44",
  margin: "0 0 30px 0",
},

counterRow: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "32px",
},

counterLabel: {
  fontSize: "18px",
  color: "#1f2a44",
},

counterSubtext: {
  fontSize: "14px",
  color: "#555",
  marginTop: "6px",
},

counterControls: {
  display: "flex",
  alignItems: "center",
  gap: "18px",
},

circleBtn: {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  border: "2px solid #98a0b8",
  background: "white",
  color: "#1f2a44",
  fontSize: "28px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},

counterNumber: {
  fontSize: "20px",
  color: "#1f2a44",
  minWidth: "20px",
  textAlign: "center",
},

addRoomText: {
  color: "#eb9757ff",
  fontSize: "18px",
  fontWeight: "600",
  cursor: "pointer",
  marginBottom: "40px",
  textAlign: "center",
},

travelersFooter: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
},

footerLink: {
  color: "#eb9757ff",
  fontSize: "16px",
},

doneBtn: {
  background: "#e47adaff",
  color: "white",
  border: "none",
  borderRadius: "999px",
  padding: "14px 26px",
  fontSize: "18px",
  fontWeight: "600",
  cursor: "pointer",
},
bestTimePanel: {
  width: "100%",
  background: "white",
  border: "1px solid #ddd",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  padding: "24px",
},

bestTimeTitle: {
  fontSize: "28px",
  fontWeight: "700",
  color: "#111",
  margin: "0 0 20px 0",
},

bestTimeTabs: {
  display: "flex",
  gap: "28px",
  overflowX: "auto",
  borderBottom: "1px solid #ddd",
  paddingBottom: "12px",
  marginBottom: "20px",
  whiteSpace: "nowrap",
},

bestTimeTab: {
  fontSize: "18px",
  fontWeight: "600",
  color: "#222",
  cursor: "pointer",
  paddingBottom: "10px",
},

bestTimeActiveTab: {
  fontSize: "18px",
  fontWeight: "700",
  color: "#eb9757ff",
  cursor: "pointer",
  paddingBottom: "10px",
  borderBottom: "3px solid #eb9757ff",
},

bestTimeRows: {
  maxHeight: "520px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
},

bestTimeRow: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 22px",
  border: "1px solid #ddd",
  borderRadius: "14px",
  background: "#fff",
},

bestTimeMonth: {
  fontSize: "20px",
  fontWeight: "600",
  color: "#222",
},

bestTimePrice: {
  fontSize: "20px",
  fontWeight: "700",
  color: "#222",
},

bestTimeEmpty: {
  padding: "30px 10px",
  fontSize: "18px",
  color: "#777",
},
};