const url =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let citiesList = [];

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    return citiesList.push(...data);
  });

const searchInputEl = document.querySelector(".search-input");
const citiesListEl = document.querySelector(".results-list");

function createAndAppendCity(eachCity) {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("result-item");
  citiesListEl.appendChild(listItemEl);

  const cityDetailsContainerEl = document.createElement("div");
  cityDetailsContainerEl.classList.add('city-details-container')
  listItemEl.appendChild(cityDetailsContainerEl);

  const cityAndStateName = document.createElement("p");
  cityAndStateName.textContent = `${eachCity.city}, ${eachCity.state}`;
  cityDetailsContainerEl.appendChild(cityAndStateName);

  const populationEl = document.createElement("p");
  populationEl.textContent = eachCity.population;
  cityDetailsContainerEl.appendChild(populationEl);
}

function displayFilteredCities(cities) {
  citiesListEl.innerHTML = "";
  for (let eachCity of cities) {
    createAndAppendCity(eachCity);
  }
}

function getFilteredCities(searchValue) {
  const filteredCities = citiesList.filter(
    (cityDetails) =>
      cityDetails.city.toLowerCase().includes(searchValue) ||
      cityDetails.state.toLowerCase().includes(searchValue)
  );

  displayFilteredCities(filteredCities);
}

searchInputEl.addEventListener("input", function (e) {
  getFilteredCities(e.target.value.toLowerCase());
});
