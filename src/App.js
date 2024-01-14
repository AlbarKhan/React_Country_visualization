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
  return (
    <div className="content">
      {countries_data.map((country) => {
        return (
          <div className="card">
            <img src={country.flag}></img>
          </div>
        );
      })}
    </div>
  );
}
