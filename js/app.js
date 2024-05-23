//console.log('connected');

// Step-1: load data by function
const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

}
// Step-2: call the function to load in console.log
loadCountries();

// Step-3: display data by sending into another function

const countriesParentDiv = document.getElementById('country')
const displayCountries = (countries) => {
  // console.log(countries);
  countries.forEach(country => {
    //console.log(country);
    const childDiv = document.createElement('div')
    //console.log(childdiv);
    childDiv.classList.add('country')
    childDiv.innerHTML = `
    <img src="${country.flags.png}" alt="${country.flags.alt}">
    <h4>Name: ${country.name.common}</h4>
    <p>Capital: ${country.capital}</p>
    <button onclick="loadCountryDetails('${country.name.common}')"> Show country detail </button> 
    `
    countriesParentDiv.appendChild(childDiv)

  })
}
// Step-4: send the function in another function

// button onclick function

const loadCountryDetails = (name) => {
  //console.log(name);
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
  console.log(country);
  const countryDetailsDiv = document.getElementById('country-details');
  countryDetailsDiv.innerHTML = `
    <img src="${country.flags.png}" alt="${country.flags.alt}">
    <h4>Name: ${country.name.common}</h4>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>UN Membership: ${country.unMember}</p>
    <p>Language: ${country.language?.eng}</p>
    `
  countryDetailsDiv.style.border = "2px solid indigo";
  window.scrollTo({ top: 0, behavior: 'instant' })

}

