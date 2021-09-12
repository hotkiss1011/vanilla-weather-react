import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="weather-app">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-8">
                <input type="search" placeholder="Type a city..." className="form-control" id="city-input" autoComplete="off" />
              </div>
              <div className="col-2">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
              </div>
              <div className="col-2">
                <input type="submit" value="Current" className="btn btn-primary w-100" />
              </div>
            </div>
          </form>
          <Weather city="Knoxville" />
        </div>
        <small>
          <a href="https://github.com/hotkiss1011/final-vanilla-weather-app">Open source code</a> by Amanda Hotchkiss
        </small>
      </div>
    </div>
  );
}

export default App;
