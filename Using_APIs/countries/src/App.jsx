import { useState, useEffect } from 'react'
import countryServices from './services/country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    countryServices.getAll().then(response => {
      setCountries(response.data)
    })
  })

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <label>find countries <input onChange={handleSearchChange} /></label>

      <Filter countries={countries} search={search} />
    </>
  )
}

const Filter = ({countries, search}) => {
  if (search === '') {
    return ''
  }

  const filtered = countries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()))


  if (filtered.length === 1) {
    return (filtered.map((country) => <CountryDetails key={country.name.official} country={country} />))
  }
  else if (filtered.length <= 10){
    return (filtered.map((country) => <Country key={country.name.official} country={country}/>))
  }
  else {
    return <div>Too many matches, specify another filter</div>
  }
}

const Country = ({country}) => <div>{country.name.common}</div>

const CountryDetails = ({country}) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>
      <h2>Languages:</h2>
      <ul>
        <Languages country={country} />
      </ul>

      <Flag country={country} />
    </>
  )
}

const Languages = ({country}) => {
  const langs = Object.values(country.languages)

  return(
    langs.map((lang) => <li key={lang}>{lang}</li>)
  )
}

const Flag = ({country}) => {
  return (<img src={country.flags.png}/>)
}

export default App