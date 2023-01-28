import React, { useState } from 'react'

const WeatherCard = ( {weather, temperature, color } ) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const handleClick = () => setIsCelsius(!isCelsius)

  return (
    <article className='card'>
      <h1 className='tittle ff-shadow'>Weather App</h1>
      <h2 className='country ff-roboto'>{weather?.name}, {weather?.sys.country}</h2>
      <div className='weather_information ff-roboto'>
        <div className='weather_image'>
          <img className='image' src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
          <h2 className='temperature'><i class='bx icon_temp bxs-thermometer' ></i>{isCelsius ? temperature?.celsius + '°C': temperature?.farenheit + '°F'}</h2>
        </div>
        <div className='information'>
          <section>
            <h3 className='back_tittle'>"{weather?.weather[0].description}"</h3>
            <ul>
              <li className='data'><i class='bx icon_hum bxs-droplet'></i><span>  Humidity: </span>{weather?.main.humidity}%</li>
              <li className='data'><i class='bx icon_wind bxl-tailwind-css'></i><span> Wind Speed: </span>{weather?.wind.speed}m/s</li>
              <li className='data'><i class='bx icon_clouds bxs-cloud'></i><span> Clouds: </span>{weather?.clouds.all}%</li>
              <li className='data'><i class='bx icon_press bxs-tachometer'></i><span> Pressure: </span>{weather?.main.pressure}hPa</li>
            </ul>
          </section>
        </div>
      </div>
      <footer>
        <button className='ff-roboto' onClick={handleClick}>Change to °{isCelsius ? 'F' : 'C'}</button>
      </footer>
    </article>
  )
}

export default WeatherCard