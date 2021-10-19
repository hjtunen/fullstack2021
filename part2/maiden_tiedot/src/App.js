import React, { useState, useEffect } from 'react'
import axios from "axios"
import Filter from './components/Filter'
import CountryView from "./components/CountryView"



const App = () => {
  const [ newFilter, setNewFilter ] = useState('')
  const [countries, setCountries] = useState([])

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

  return (
    <div>
      find countries 
      <Filter value={newFilter} onChange={handleFilterChange}/>
      <CountryView countryData={filtered} filterFun={setNewFilter} />
    </div>
  )

}

export default App