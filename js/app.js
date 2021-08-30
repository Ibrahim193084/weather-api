const searchWeather = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value = '';
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=496ed58aa21550e93bffe4025f1c2157`
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data))
}

const displayResult = weathers => {
  const weatherResult =  document.getElementById('weather-result')
weatherResult.textContent =''
//   weathers.forEach(wether =>{
      const div = document.createElement('div')
      div.innerHTML = `<h3>${weathers.name} ${weathers.sys.country}</h3>
      <h5>${Math.round(weathers.main.temp-272)}° C</h5>`
    
      weatherResult.appendChild(div)
//   })
}
