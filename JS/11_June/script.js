const arrH1 = document.querySelectorAll('h1')
console.log(arrH1)

const text =[
    'Hello','Hello2','Hello3',"Hello4","Hello5","Hello6","Hello7"
]

for(let i = 0; i<arrH1.length; i++)
    {
        arrH1[i].innerHTML = text[i]
    }