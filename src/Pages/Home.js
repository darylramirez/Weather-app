import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import App from "../App";
import { GET_WEATHER_QUERY } from "../graphql/Queries";
import '../App.css'

function Home() {
    let today = new Date().toLocaleDateString()
    const [city, setCity] = useState('');
    const [getWeather, {loading, data, error}] = useLazyQuery(GET_WEATHER_QUERY)
if(loading) return <h1>Loading...</h1>
    if (error) return <h1>Sorry there was an error!</h1>
    if (data){
        console.log(data)
    }
    return (
      <div className='body'>
          <h1>Search for the current weather in your selected city...</h1>
          <div className='location-container'>
          <input className='location-container' type='text' placeholder='City Name...' onChange={(event)=> {setCity(event.target.value)}}></input>
          <button  className='location-button' onClick={()=> getWeather({
        variables: {name: city, config: { units: 'imperial'}},
    })}>Search</button>
    </div>
              {data && (
                 <div className='container'>
                <h1 className='location'>City: {data.getCityByName.name}, {data.getCityByName.country}</h1>
                <h1 className='date-container' className='date-day'>Today's date: {today}</h1>
<h1 className='date-container' className='date-day'>Temperature: {data.getCityByName.weather.temperature.actual} F</h1>
<h1>Description: {data.getCityByName.weather.summary.description}</h1>
<h1>Wind Speed: {data.getCityByName.weather.wind.speed} m/s </h1>
</div>
              )}
      </div>
    );
  }
  
  export default Home;