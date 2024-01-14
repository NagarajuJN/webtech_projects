import React, { useState } from 'react'
import './WeatherApp.css'

// to import the imgage to the component folder

import serch_icon from '../Assests/search.png'

import cloud_icon from '../Assests/cloud.png'
import humidity_icon from '../Assests/humidity.png'

import wind_icon from '../Assests/wind.png'
import snow_icon   from '../Assests/snow.png'

import drizzle_icon from '../Assests/drizzle.png'
import clear_icon from '../Assests/clear.png'

import rain_icon from '../Assests/rain.png'

export const WeatherApp = () => {
    let api_key="c84b5bdf7b0e7bbd5c2e93e952f873e8";
    
    const [wicon,setWicon ] = useState(cloud_icon);
    
    const serach= async()=>{

        const element=document.getElementsByClassName("cityInput")
    
        if(element[0].value==="")
        {
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
    
    let response = await fetch(url);
    let data = await response.json();
        
    const humidity=document.getElementsByClassName("humidity-percent");
    
    const wind=document.getElementsByClassName("wind-rate");
    const temp=document.getElementsByClassName("weather-temp");
    const location=document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = data.wind.speed+" km/h"; // we can add math to remove the decimal paint 
                                                    // ex: = Math.floor(data.main.temp)+"°c";
        temp[0].innerHTML = data.main.temp+"°c";
        location[0].innerHTML = data.name;

        // to change weather icon according to dynamic weather change 
// we must install the Thunder clinet to vs code
// ti understandt the more about icon code i.e 01d like plss visit --> https://openweathermap.org/weather-conditions

            if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
            {
                setWicon(clear_icon);
            }

            else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
            {
                setWicon(clear_icon);
            }
            else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
            {
                setWicon(drizzle_icon);
            }

            else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
            {
                setWicon(drizzle_icon);
            }

            else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
            {
                setWicon(rain_icon);

            }   

            else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
            {
                setWicon(rain_icon);
            }   
            else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
            {
                setWicon(snow_icon);
            }   

            else{
                setWicon(clear_icon);
            }
        }
    return (
        <div className='container'>

            <div className='top-bar'>
                <input type='text' className='cityInput' placeholder='Search'/>
                <div className='search-icon' onClick={()=>{serach()}}>
                    <img src={serch_icon} alt="search"/>
                </div>
            </div>
            <div className='weather-image'>
                <img src={wicon} alt='' />

            <div>
                <div className='weather-temp'>24°C</div>
                <div className='weather-location'>India</div>
                <div className='data-container'>
                    <div className='element'>
                        <img src={humidity_icon} alt="" className="icon" />
                        <div className='data'>
                            <div className='humidity-percent'>64%</div>
                            <div className='text'>Humidity</div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src={wind_icon} alt=""className="icon" />
                        <div className='data'>
                            <div className='wind-rate'>18 km/h</div>
                            <div className='text'>Wind Speed</div>
                        </div>
                    </div>
                </div>

            </div>


            </div>
        </div>
    )
}
export default WeatherApp;
