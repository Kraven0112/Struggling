const input=document.getElementById('city-input')
const button =document.getElementById('search-button')
const cityName=document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')

async function getApi(cityName)
{
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=5a15dadcce3648c8a3d84048242805&q=${cityName}&aqi=no`)

     return await data.json() //waiting for data 
   
}

button.addEventListener('click',async()=>{
    const value= input.value  
    const actualData = await getApi(value)  //getApi() will take value from here and make search in api above in async function

    cityName.innerText = `Location : ${actualData.location.name},${actualData.location.region},${actualData.location.country}`

    cityTime.innerText = `Date and Time : ${actualData.current.last_updated}`

    cityTemp.innerText = `Temperature in celsius : ${actualData.current.temp_c}`
})