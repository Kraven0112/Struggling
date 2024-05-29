const userName = document.getElementById('name')
const age = document.getElementById('age')
const area = document.getElementById('area')
const country = document.getElementById('country')
const region = document.getElementById('region')
const district = document.getElementById('district')
const city = document.getElementById('city')


userApi = ('./myAPi.js')

async function getApi()
{
    data = await fetch(userApi)
    data2 = await data.text()
    console.log(data2);

    // userName.innerText = data2.consuser.name
    // age.innerText = data2.user.age
    // area.innerText = data2.user.address.area
    // country.innerText = data2.user.address.country
    // region.innerText = data2.user.address.region
    // district.innerText = data2.user.address.district
    // city.innerText = data2.user.address.city
}
getApi()