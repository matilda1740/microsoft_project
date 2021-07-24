import React, { useState} from 'react'
import axios from '../components/axios'
import './Login.css'
import './Weather.css'
export default function Weather() {
    //  CASE 1: LOGGED : READ LOCATION FROM USER DETAILS
    // CASE 2: ANONYMOUS/ GUEST : ENTER LOCATION

    // 1. Get Date From User 
    // 2. CALCULATE NO OF DAYS 
    // 3. PASS IN NO OF DAYS AS A PARAMETER
    // 4. DISPLAY RETURNED LIST WITH DATE AND TEMPERATURE ON THAT DATE

    const [location, setLocation] = useState("");
    const [forecastCount, setForecastCount] = useState("");


    const [name, setName] = useState("");
    const [temp, setTemp] = useState("");
    const [hum, setHum] = useState("");
    const [weatherDesc, setWeatherDesc] = useState("");
    const [weatherMain, setweatherMain] = useState("");
    const [forecastDate, setForecastDate] = useState("");

    const formatDate = (date) => {
        let data = date.split('-');
        return new Date(data[0], data[1]-1, data[2]);
    }

    const dateDifference = (current, future) => {
        return Math.floor((future-current)/(1000*60*60*24)) + 1;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // GET CURRENT DATE
        const today = new Date();
        const future = document.querySelector('#forecast_date').value; 

        setForecastCount(dateDifference(today, formatDate(future)));

        // Add one to include the forecast date itself, without the one it just includes a date to date before forecast date 

        const params = {
        access_key: '7a5bdcef8825486b40499e527493451e',
        query: location,
        forecast_count: 5 * (forecastCount + 1)
        }
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${params.query}&appid=${params.access_key}&cnt=${params.forecast_count}`)
        .then(response => {
            const apiResponse = response.data;
            
            setName(apiResponse.city.name)
            setTemp(Math.floor( (apiResponse.list[0].main.temp - 273.15) * 100) / 100)
            setHum(apiResponse.list[0].main.humidity)
            setWeatherDesc(apiResponse.list[0].weather[0].description)
            setweatherMain(apiResponse.list[0].weather[0].main)

            let fdate = new Date(apiResponse.list[0].dt)
            console.log(fdate)
            // setForecastDate(fdate)
            console.log(apiResponse)

        }).catch(error => {
            console.log(error);
        });

    }
    const handleChange = (e) => {
        if(e.target.name === "forecast_location"){
            setLocation(e.target.value)
        }else if(e.target.name === "forecast_date"){
            formatDate(e.target.value)
            setForecastDate(e.target.value)
        }
    }


    return (
        <div className="weather_section registration_section">
            <div className="login_logo">
            <img src="/images/logo.png" alt="Site Logo" />
            </div>
            <h2>Weather Forecast</h2>
            <form className="registration_form" onSubmit={handleSubmit}>
                <label className="form_labels">Enter County Name:</label>
                <input className="form_inputs"  type="text" name="forecast_location" onChange={handleChange}/>
                <label className="form_labels">Enter Forecast Date (Range 0 - 6):</label>
                <input className="form_inputs"  type="date" id="forecast_date" name="forecast_date" onChange={handleChange}/>                
                <button className="form_btn" type="submit">Forecast</button>
            </form>
            <div className="weather_response_div">
                {
                    name &&
                    <>
                        <h4>Weather Forecast for {name} County on {forecastDate}</h4>
                        <p>
                            Weather: {weatherMain} <br />
                            Description: {weatherDesc} <br />
                            Temperature: {temp}℃ <br /> 
                            Humidity: {hum} 
                        </p>
                    </>                    
                }              
            </div>
        </div>
    )
}
