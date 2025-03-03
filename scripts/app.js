import { countries } from "./countries.js";
                 //parametro//
const makeCountry = (country) => {
    const container = document.createElement('div')
    container.classList.add('card-country')

    const imgContainer = document.createElement('img')
    imgContainer.src = country.flag
    imgContainer.alt = country.name

    const nameContainer = document.createElement('h2')
    nameContainer.textContent = country.name

    container.appendChild(imgContainer)
    container.appendChild(nameContainer)

    document.querySelector('#section-countries').appendChild(container)
}

const renderCountries = () => {              //pais//
    countries.forEach(country => makeCountry(country))
}

window.addEventListener('DOMContentLoaded', renderCountries)