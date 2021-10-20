import React from "react"

const Country = ({country, filterFun}) => {
    return (
      <div>{country.name}
        <button onClick={() => filterFun(country.name)}>show</button>
      </div>
    )
  }

const DetailView = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>

            <div>capital {country.capital}</div>
            <div>population {country.population}</div>

            <h2>languages</h2>

            <ul>
                {country.languages.map(language => 
                    <li key={language.name}>{language.name}</li>)}
            </ul>

            <img src={country.flags.svg} alt={country.name} width="100" height="100" />

        </div>
    )

}

const WeatherView = ({country, weather}) => {
  
  if (weather === "") {
    return <h2>Weather pending</h2>
  }


  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      <div><b>Temperature:</b> {weather.main.temp} Celsius</div>
      <div><b>Feels like:</b> {weather.main.feels_like} Celsius</div>
      <div><b>Description:</b> {weather.weather[0].main}, {weather.weather[0].description}</div>

      <div><b>Wind:</b> {weather.wind.speed} m/s, {weather.wind.deg} degrees</div>

    </div>

  )
}
  
const CountryView = ({countryData, filterFun, weather}) => {
    if (countryData.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
    if (countryData.length === 1) {
        return (
          <div>
            <DetailView country={countryData[0]} />
            <WeatherView country={countryData[0]} weather={weather}/>
          </div>
          )
    }
    return countryData.map(country => 
      <Country key={country.name} country={country} filterFun={filterFun} />
    )
  }



    
export default CountryView