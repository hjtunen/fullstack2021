import React, { useState, useEffect } from 'react'
import axios from "axios"
import Filter from './components/Filter'
import CountryView from "./components/CountryView"



const App = () => {
  const [ newFilter, setNewFilter ] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState("")

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const filtered = countries.filter(country => 
    country.name.toLowerCase().includes(newFilter.toLowerCase()))


  const api_key = process.env.REACT_APP_API_KEY
  let query = `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${api_key}&units=metric`
  if (filtered.length === 1){
    const country = filtered[0]
    query = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`
  }
  
  

  useEffect(() => {
    console.log('effect')
    axios
      .get(query)
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setWeather(response.data)
       })
   }, [query])
  

  return (
    <div>
      find countries 
      <Filter value={newFilter} onChange={handleFilterChange}/>
      <CountryView countryData={filtered} filterFun={setNewFilter} weather={weather} />
    </div>
  )

}

export default App