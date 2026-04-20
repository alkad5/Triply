import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [showTravelers, setShowTravelers] = useState(false);
  const [activeTab, setActiveTab] = useState("Beach");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showDestinations, setShowDestinations] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarIndex, setCalendarIndex] = useState(0);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedCity, setSelectedCity] = useState("Madrid");

  const navigate = useNavigate();

  const destinationOptions = [
    { country: "Japan" },
    { country: "Madrid" },
    { country: "Barbados" },
    { country: "Panama" },
    { country: "New York" },
    { country: "Chicago" },
  ];

  const beachPlaces = [
    {
      name: "Panama",
      location: "Central America",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
      tag: "Island escape",
    },
    {
      name: "Barbados",
      location: "Caribbean",
      price: "$260",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      tag: "Caribbean calm",
    },
    {
      name: "Puerto Rico",
      location: "Caribbean",
      price: "$190",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
      tag: "Coastal culture",
    },
    {
      name: "Hawaii",
      location: "United States",
      price: "$355",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
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
      name: "Japan",
      location: "Asia",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1200&auto=format&fit=crop",
      tag: "Street food & nightlife",
    },
    {
      name: "Italy",
      location: "Europe",
      price: "$180",
      image:
        "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1200&auto=format&fit=crop",
      tag: "Historic landmarks",
    },
    {
      name: "Egypt",
      location: "North Africa",
      price: "$90",
      image:
        "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=1200&auto=format&fit=crop",
      tag: "Ancient wonders",
    },
  ];

  const displayedPlaces =
    activeTab === "Culture" ? culturePlaces : beachPlaces;

  const bookingCities = [
    "Madrid",
    "Panama",
    "Japan",
    "Barbados",
    "New York",
    "Myrtle Beach",
    "Chicago",
    "Nashville",
  ];

  const bookingPriceData = {
    Madrid: [
      { month: "April 2026", price: "$660 - $850" },
      { month: "May 2026", price: "$600 - $800" },
      { month: "June 2026", price: "$318 - $650" },
      { month: "July 2026", price: "$320 - $700" },
      { month: "August 2026", price: "$560 - $900" },
      { month: "September 2026", price: "$570 - $880" },
      { month: "October 2026", price: "$550 - $820" },
      { month: "November 2026", price: "$550 - $800" },
      { month: "December 2026", price: "$580 - $950" },
      { month: "January 2027", price: "$600 - $900" },
    ],
    Panama: [
      { month: "April 2026", price: "$220 - $480" },
      { month: "May 2026", price: "$200 - $450" },
      { month: "June 2026", price: "$210 - $470" },
      { month: "July 2026", price: "$260 - $520" },
      { month: "August 2026", price: "$240 - $500" },
      { month: "September 2026", price: "$230 - $480" },
      { month: "October 2026", price: "$250 - $510" },
      { month: "November 2026", price: "$260 - $530" },
      { month: "December 2026", price: "$400 - $750" },
      { month: "January 2027", price: "$300 - $600" },
    ],
    Japan: [
      { month: "April 2026", price: "$900 - $1400" },
      { month: "May 2026", price: "$850 - $1300" },
      { month: "June 2026", price: "$800 - $1200" },
      { month: "July 2026", price: "$950 - $1500" },
      { month: "August 2026", price: "$1000 - $1600" },
      { month: "September 2026", price: "$850 - $1300" },
      { month: "October 2026", price: "$900 - $1400" },
      { month: "November 2026", price: "$850 - $1300" },
      { month: "December 2026", price: "$1100 - $1700" },
      { month: "January 2027", price: "$950 - $1400" },
    ],
    Barbados: [
      { month: "April 2026", price: "$400 - $700" },
      { month: "May 2026", price: "$380 - $650" },
      { month: "June 2026", price: "$350 - $600" },
      { month: "July 2026", price: "$420 - $750" },
      { month: "August 2026", price: "$430 - $780" },
      { month: "September 2026", price: "$360 - $620" },
      { month: "October 2026", price: "$380 - $650" },
      { month: "November 2026", price: "$420 - $720" },
      { month: "December 2026", price: "$600 - $1000" },
      { month: "January 2027", price: "$550 - $900" },
    ],
  };

  const emptyMonths = [
    { month: "April 2026", price: "" },
    { month: "May 2026", price: "" },
    { month: "June 2026", price: "" },
    { month: "July 2026", price: "" },
    { month: "August 2026", price: "" },
    { month: "September 2026", price: "" },
    { month: "October 2026", price: "" },
    { month: "November 2026", price: "" },
    { month: "December 2026", price: "" },
    { month: "January 2027", price: "" },
  ];

  const calendarMonths = [
    { month: "April", year: 2026, days: 30, firstDay: 3 },
    { month: "May", year: 2026, days: 31, firstDay: 5 },
    { month: "June", year: 2026, days: 30, firstDay: 1 },
    { month: "July", year: 2026, days: 31, firstDay: 3 },
    { month: "August", year: 2026, days: 31, firstDay: 6 },
    { month: "September", year: 2026, days: 30, firstDay: 2 },
    { month: "October", year: 2026, days: 31, firstDay: 4 },
    { month: "November", year: 2026, days: 30, firstDay: 0 },
    { month: "December", year: 2026, days: 31, firstDay: 2 },
    { month: "January", year: 2027, days: 31, firstDay: 5 },
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function handleDateSelect(month, day, year) {
    const clickedDate = new Date(`${month} ${day}, ${year}`);

    if (!departureDate || (departureDate && returnDate)) {
      setDepartureDate({ month, day, year });
      setReturnDate(null);
      return;
    }

    const departure = new Date(
      `${departureDate.month} ${departureDate.day}, ${departureDate.year}`
    );

    if (clickedDate < departure) {
      setDepartureDate({ month, day, year });
      setReturnDate(null);
    } else {
      setReturnDate({ month, day, year });
      setShowCalendar(false);
    }
  }

  function getDateDisplay() {
    if (departureDate && returnDate) {
      return `${departureDate.month} ${departureDate.day}, ${departureDate.year} - ${returnDate.month} ${returnDate.day}, ${returnDate.year}`;
    }

    if (departureDate) {
      return `${departureDate.month} ${departureDate.day}, ${departureDate.year}`;
    }

    return "Dates";
  }

  function renderMonth(monthData) {
    const emptyDays = Array(monthData.firstDay).fill(null);
    const actualDays = Array.from({ length: monthData.days }, (_, i) => i + 1);
    const allDays = [...emptyDays, ...actualDays];

    return (
      <div style={styles.monthBlock}>
        <h3 style={styles.monthTitle}>
          {monthData.month} {monthData.year}
        </h3>

        <div style={styles.weekRow}>
          {weekDays.map((day) => (
            <div key={day} style={styles.weekDay}>
              {day}
            </div>
          ))}
        </div>

        <div style={styles.daysGrid}>
          {allDays.map((day, index) => {
            if (!day) {
              return <div key={index} style={styles.emptyDay}></div>;
            }

            const isDeparture =
              departureDate &&
              departureDate.day === day &&
              departureDate.month === monthData.month &&
              departureDate.year === monthData.year;

            const isReturn =
              returnDate &&
              returnDate.day === day &&
              returnDate.month === monthData.month &&
              returnDate.year === monthData.year;

            return (
              <div
                key={index}
                style={{
                  ...styles.dayCell,
                  ...(isDeparture || isReturn ? styles.selectedDay : {}),
                }}
                onClick={() =>
                  handleDateSelect(monthData.month, day, monthData.year)
                }
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const bestTimeImage =
    selectedCity === "Madrid"
      ? "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1200&auto=format&fit=crop"
      : selectedCity === "Panama"
      ? "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop"
      : selectedCity === "Japan"
      ? "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
      : selectedCity === "Barbados"
      ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
      : "";

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <h1 style={styles.logo} onClick={() => navigate("/home")}>
          Triply
        </h1>

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
                {selectedDestination || "Where to?"}
              </div>

              {showDestinations && (
                <div style={styles.dropdownMenu}>
                  {destinationOptions.map((place, index) => (
                    <div
                      key={index}
                      style={styles.dropdownItem}
                      onClick={() => {
                        setSelectedDestination(place.country);
                        setShowDestinations(false);
                      }}
                    >
                      <div style={styles.dropdownCountry}>{place.country}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={styles.dateWrapper}>
              <div
                style={styles.inputBox}
                onClick={() => setShowCalendar(!showCalendar)}
              >
                {getDateDisplay()}
              </div>

              {showCalendar && (
                <div style={styles.calendarDropdown}>
                  <div style={styles.calendarTopTabs}>
                    <div style={styles.calendarTopTabActive}>Calendar</div>
                    <div style={styles.calendarTopTab}>Flexible dates</div>
                  </div>

                  <div style={styles.calendarMain}>
                    <button
                      type="button"
                      style={styles.arrowBtn}
                      onClick={() =>
                        setCalendarIndex(Math.max(0, calendarIndex - 1))
                      }
                    >
                      ‹
                    </button>

                    <div style={styles.monthsContainer}>
                      {renderMonth(calendarMonths[calendarIndex])}
                      {calendarMonths[calendarIndex + 1] &&
                        renderMonth(calendarMonths[calendarIndex + 1])}
                    </div>

                    <button
                      type="button"
                      style={styles.arrowBtn}
                      onClick={() =>
                        setCalendarIndex(
                          Math.min(calendarMonths.length - 2, calendarIndex + 1)
                        )
                      }
                    >
                      ›
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div style={styles.travelersWrapper}>
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
                        type="button"
                        style={styles.circleBtn}
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                      >
                        −
                      </button>
                      <span style={styles.counterNumber}>{adults}</span>
                      <button
                        type="button"
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
                        type="button"
                        style={styles.circleBtn}
                        onClick={() => setChildren(Math.max(0, children - 1))}
                      >
                        −
                      </button>
                      <span style={styles.counterNumber}>{children}</span>
                      <button
                        type="button"
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
                    <span style={styles.footerLink}>
                      Need to book 9 or more rooms?
                    </span>
                    <button
                      type="button"
                      style={styles.doneBtn}
                      onClick={() => setShowTravelers(false)}
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              style={styles.searchBtn}
              onClick={() => {
                if (selectedDestination === "Panama") {
                  navigate("/panama");
                } else if (selectedDestination === "Barbados") {
                  navigate("/barbados");
                }
              }}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section style={styles.bestTimeSection}>
        <h2 style={styles.bestTimeTitle}>
Find the cheapest months to fly        </h2>

        <div style={styles.bestTimeBox}>
          <div style={styles.bestTimeTabs}>
            {bookingCities.map((city) => (
              <span
                key={city}
                onClick={() => setSelectedCity(city)}
                style={
                  selectedCity === city
                    ? styles.bestTimeTabActive
                    : styles.bestTimeTab
                }
              >
                {city}
              </span>
            ))}
          </div>

          <div style={styles.bestTimeContent}>
            <div style={styles.bestTimeImageWrap}>
              {bestTimeImage ? (
                <img
                  src={bestTimeImage}
                  alt={selectedCity}
                  style={styles.bestTimeImage}
                />
              ) : (
                <div style={styles.bestTimeImagePlaceholder}></div>
              )}
            </div>

            <div style={styles.bestTimeMonths}>
              {(bookingPriceData[selectedCity] || emptyMonths).map(
                (item, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.monthPriceRow,
                      ...(index === 1 ? styles.monthPriceRowActive : {}),
                    }}
                  >
                    <span>{item.month}</span>
                    <span>{item.price}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={styles.staysSection}>
        <h2 style={styles.sectionTitle}>Stays for every travel style</h2>

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
                <img
                  src={place.image}
                  alt={place.name}
                  style={styles.cardImage}
                />
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
    cursor: "pointer",
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
    flex: 1,
    minWidth: "220px",
  },

  dateWrapper: {
    position: "relative",
    flex: 1,
    minWidth: "220px",
  },

  travelersWrapper: {
    position: "relative",
    flex: 1,
    minWidth: "220px",
  },

  inputBox: {
    flex: 1,
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
    cursor: "pointer",
  },

  dropdownCountry: {
    fontWeight: "600",
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

  calendarDropdown: {
    position: "absolute",
    top: "78px",
    left: "-180px",
    width: "1100px",
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    zIndex: 999,
    overflow: "hidden",
  },

  calendarTopTabs: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    background: "#f2f4f7",
  },

  calendarTopTabActive: {
    padding: "20px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
    color: "#fcbf8f",
    borderBottom: "3px solid #fcbf8f",
    background: "white",
  },

  calendarTopTab: {
    padding: "20px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
    color: "#1f2a44",
  },

  calendarMain: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "20px",
    padding: "20px",
  },

  monthsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    flex: 1,
  },

  monthBlock: {
    width: "100%",
  },

  monthTitle: {
    textAlign: "center",
    fontSize: "28px",
    color: "#1f2a44",
    marginBottom: "25px",
  },

  weekRow: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    marginBottom: "14px",
  },

  weekDay: {
    textAlign: "center",
    fontSize: "18px",
    color: "#1f2a44",
  },

  daysGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "10px",
  },

  emptyDay: {
    height: "48px",
  },

  dayCell: {
    height: "48px",
    width: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "20px",
    color: "#1f2a44",
  },

  selectedDay: {
    background: "#e47adaff",
    color: "white",
    fontWeight: "700",
  },

  arrowBtn: {
    border: "none",
    background: "#f5f5f5",
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    fontSize: "36px",
    cursor: "pointer",
    color: "#1f2a44",
    marginTop: "80px",
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
    background: "#f7a8b8",
    color: "white",
    border: "none",
    borderRadius: "999px",
    padding: "14px 26px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
  },

  bestTimeSection: {
    maxWidth: "1400px",
    margin: "0 auto 60px auto",
    padding: "0 40px",
  },

  bestTimeTitle: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#000",
    marginBottom: "24px",
    textAlign: "left",
  },

  bestTimeBox: {
    backgroundColor: "#fff",
    border: "1px solid #eee",
    borderRadius: "22px",
    padding: "24px 24px 28px",
  },

  bestTimeTabs: {
    display: "flex",
    gap: "36px",
    alignItems: "center",
    overflowX: "auto",
    borderBottom: "1px solid #ddd",
    paddingBottom: "14px",
    marginBottom: "24px",
  },

  bestTimeTab: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#222",
    cursor: "pointer",
    paddingBottom: "10px",
    whiteSpace: "nowrap",
  },

  bestTimeTabActive: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#eb9757ff",
    cursor: "pointer",
    paddingBottom: "10px",
    borderBottom: "4px solid #f7a8b8",
    whiteSpace: "nowrap",
  },

  bestTimeContent: {
    display: "grid",
    gridTemplateColumns: "1.05fr 1.4fr",
    gap: "24px",
    alignItems: "start",
  },

  bestTimeImageWrap: {
    width: "100%",
  },

  bestTimeImage: {
    width: "100%",
    height: "540px",
    objectFit: "cover",
    borderRadius: "18px",
  },

  bestTimeImagePlaceholder: {
    width: "100%",
    height: "540px",
    borderRadius: "18px",
    backgroundColor: "#f7f7f7",
  },

  bestTimeMonths: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    maxHeight: "620px",   
  overflowY: "auto",
  paddingRight: "6px",
  },

  monthPriceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 24px",
    border: "1px solid #ddd",
    borderRadius: "14px",
    backgroundColor: "#fff",
    fontSize: "22px",
    fontWeight: "600",
    color: "#222",
  },

  monthPriceRowActive: {
    backgroundColor: "#f7d6df",
    border: "1px solid #f1b9c9",
  },

  staysSection: {
    padding: "40px",
  },

  sectionTitle: {
    fontSize: "42px",
    color: "#1f2a44",
    marginBottom: "8px",
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
    borderBottom: "3px solid #f7a8b8",
    paddingBottom: "10px",
    cursor: "pointer",
  },

  tab: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#1f2a44",
    paddingBottom: "10px",
    cursor: "pointer",
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
};