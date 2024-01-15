import "./App.css";
import "./App.css";
import "./countries_data";
import countries_data from "./countries_data";
export default function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <>
      <div className="hero">
        <h1>Country visualisation</h1>
      </div>
      <Content />
    </>
  );
}

function Content() {
  console.log(countries_data);
  return (
    <div className="content">
      {countries_data.map((country) => {
        return (
          <div className="card">
            <img src={country.flag}></img>
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
