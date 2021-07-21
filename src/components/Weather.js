import React, { useState} from 'react'
import axios from '../components/axios'

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
        }
        // console.log(e.target.value);
    }


    return (
        <div className="weather_section registeration_section">
            <form className="registeration_form" onSubmit={handleSubmit}>
                <label>Enter County Name:</label>
                <input type="text" name="forecast_location" onChange={handleChange}/>
                <label>Enter Forecast Date (Range 0 - 6):</label>
                <input type="date" id="forecast_date" name="forecast_date" onChange={handleChange}/>                
                <button type="submit">Forecast</button>
            </form>
            <div className="weather_response_div">
                {
                    name &&
                    <p>
                    The temperature in {name} on {forecastDate} will be ${temp}℃
                    </p>
                }              
            </div>
        </div>
    )
}
