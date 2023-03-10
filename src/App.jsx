import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import logo from './assets/logo.png'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success) 
  }, [])


  useEffect(() => {
    if (coords) {
      const APIKey = 'ff907925cdb3c2beaf3ca900c7e202e5'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKey}`

      axios.get(url)
        .then(res => {
           setWeather(res.data)
           const obj = {
              celsius: (res.data.main.temp - 273.15).toFixed(1),
              farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
            }
            setTemperature(obj)
          })
        .catch(err => console.log(err))
        .finally(() => setTimeout(() => setIsLoading(false), 2000))
    }
  }, [coords])
  
  
console.log(weather)

  return (
    <div className="App">
     { 
     isLoading ?
      <div className='load_screen'>
        <img className='load_image' src={logo} alt="logo" />
      </div>
     :
     <WeatherCard 
        color={'black'}
        weather={weather}
        temperature={temperature}
      />
      }
    </div>
  )
}

export default App
