let h2 = document.getElementById('groot')
let milisec=0
let sec=0
let minute=0
let hour=0
function start()
{
    setInterval(() => {
        if(milisec==59)
            {
                milisec=0
                sec++
            }
        if(sec==59)
            {
                sec=0
                minute++
            }
        if(minute==59)
            {
                minute=0
                hour++
            }
        h2.innerHTML=`${hour} : ${minute} : ${sec} : ${milisec++}`
    }, 22.5);
}