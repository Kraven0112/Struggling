const dc = document.getElementById('confirmed')
const dd = document.getElementById('deceased')
const dr = document.getElementById('recovered')
const date = document.getElementById('date')
const dateymd = document.getElementById('dateymd')
const totConfirmed = document.getElementById('tot-confirm')
const totDeceased = document.getElementById('tot-deceased')
const totRecover = document.getElementById('tot-recover')

const input = document.getElementById('date-input')
const button = document.getElementById('search-button')


async function getApi()
{
    const data = await fetch('https://data.covid19india.org/data.json')

    return await data.json()
}

button.addEventListener('click',()=>{
    // console.log(input.value)


    const inputData = input.value

    const actualData = getApi(inputData)

    dc.innerText = actualData.cases_time_series.dailyconfirmed

    dd.innerText = actualData.cases_time_series.dailydeceased

    dr.innerText = actualData.cases_time_series.dailyrecovered

    date.innerText = actualData.cases_time_series.date

    dateymd.innerText = actualData.cases_time_series.dateymd

    totConfirmed.innerText = actualData.cases_time_series.totalconfirmed

    totDeceased.innerText = actualData.cases_time_series.totaldeceased

    totRecover.innerText = actualData.cases_time_series.totalrecovered
})


