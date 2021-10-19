import React from "react"

const Country = ({country}) => {
    return (
      <div>{country.name}</div>
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
  
const CountryView = ({countryData}) => {
    if (countryData.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
    if (countryData.length === 1) {
        return <DetailView country={countryData[0]} />
    }
    return countryData.map(country => 
      <Country key={country.name} country={country}/>
    )
  }



    
export default CountryView