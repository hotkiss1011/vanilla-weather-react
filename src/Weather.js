export default function Weather(props) {
    let city = props.city;

    return (
        <div className="current-weather">
            <div className="overview">
                <div className="city">
                    {city}
                </div>
                <ul>
                    <li>
                        Last Updated: <span id="time-updated">Sunday 12:28</span>
                    </li>
                    <li id="description">Clear sky</li>
                </ul>
            </div>
            <div className="currTemp">
                <div className="row">
                    <div className="col-6">
                        <div className="clearfix weather-temp">
                            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="clear sky" id="icon" className="float-left" />
                            <span className="float-left" id="degrees">
                                <strong id="temp">76</strong>°F
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                Humidity: <span id="humidity">20</span>%
                            </li>
                            <li>
                                Wind: <span id="wind">2</span> mph
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="forecast">
                <div className="row">
                    <div className="col-2 dailyForecast">
                        <div className="weather-forecast-date">
                            Sunday
                        </div>
                        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="clear sky" id="icon" className="float-left" />
                        <div className="weather-forecast-temp">
                            <span className="weather-forecast-temp-high"> 80° </span>
                            <span className="weather-forecast-temp-low"> 70° </span>
                        </div>
                    </div>
                    <div className="col-2 dailyForecast">
                        <div className="weather-forecast-date">
                            Monday
                        </div>
                        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="clear sky" id="icon" className="float-left" />
                        <div className="weather-forecast-temp">
                            <span className="weather-forecast-temp-high"> 80° </span>
                            <span className="weather-forecast-temp-low"> 70° </span>
                        </div>
                    </div>
                    <div className="col-2 dailyForecast">
                        <div className="weather-forecast-date">
                            Tuesday
                        </div>
                        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="clear sky" id="icon" className="float-left" />
                        <div className="weather-forecast-temp">
                            <span className="weather-forecast-temp-high"> 80° </span>
                            <span className="weather-forecast-temp-low"> 70° </span>
                        </div>
                    </div>
                    <div className="col-2 dailyForecast">
                        <div className="weather-forecast-date">
                            Wednesday
                        </div>
                        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="clear sky" id="icon" className="float-left" />
                        <div className="weather-forecast-temp">
                            <span className="weather-forecast-temp-high"> 80° </span>
                            <span className="weather-forecast-temp-low"> 70° </span>
                        </div>
                    </div>
                    <div className="col-2 dailyForecast">
                        <div className="weather-forecast-date">
                            Thursday
                        </div>
                        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="clear sky" id="icon" className="float-left" />
                        <div className="weather-forecast-temp">
                            <span className="weather-forecast-temp-high"> 80° </span>
                            <span className="weather-forecast-temp-low"> 70° </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}