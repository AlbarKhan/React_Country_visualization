import { useState } from "react";
import "./App.css";
import "./App.css";
import "./countries_data";
import countries_data from "./countries_data";
export default function App() {
  return (
    <div className="app">
      <Hero />
    </div>
  );
}

function Hero() {
  const [region, setRegion] = useState("");
  const [responsive, setResponsive] = useState(false);
  let countriesByContinent = countries_data;

  if (region === "Asia") {
    countriesByContinent = countries_data.filter(
      (country) => country.region === region
    );
  } else if (region === "All") {
    countriesByContinent = countries_data;
  } else if (region === "Africa") {
    countriesByContinent = countries_data.filter(
      (country) => country.region === region
    );
  } else if (region === "Europe") {
    countriesByContinent = countries_data.filter(
      (country) => country.region === region
    );
  } else if (region === "Americas") {
    countriesByContinent = countries_data.filter(
      (country) => country.region === region
    );
  }

  const continent = ["All", "Asia", "Africa", "Europe", "Americas"];
  return (
    <div className="main-wrapper">
      <header>
        <ul className="links">
          {continent.map((con) => {
            return (
              <Links
                setRegion={setRegion}
                responsive={responsive}
                setResponsive={setResponsive}
              >
                {con}
              </Links>
            );
          })}
          <span className="icon" onClick={() => setResponsive(!responsive)}>
            {responsive ? <span>X</span> : <i className="fa-solid fa-bars"></i>}
          </span>
        </ul>
      </header>
      <div className="hero">
        <h1>Country visualisation</h1>
      </div>
      <Content countries={countriesByContinent} />
    </div>
  );
}

function Links({ children, setRegion, responsive, setResponsive }) {
  return (
    <li
      className={responsive ? "link-responsive" : "link"}
      onClick={(e) => {
        setRegion(e.target.textContent);
        setResponsive(!responsive);
      }}
    >
      {children}
    </li>
  );
}

function Content({ countries }) {
  return (
    <div className="content">
      {countries.map((country) => {
        return (
          <div className="card" key={country.flag}>
            <img src={country.flag} alt="flag"></img>
            <p>{country.name}</p>
            <div>
              <p>Capital : {country.capital}</p>
              <p>Languages :{country.languages.join(",")}</p>
              <p>Population : {country.population}</p>
              <p>Region:{country.region}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
