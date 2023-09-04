let type = 'celsius'
let data = ''

const body = document.body
const temp = document.createElement('h1')
body.appendChild(temp)
const feels = document.createElement('h2')
body.appendChild(feels)
const humidity = document.createElement('p')
body.appendChild(humidity)

export function domData (obj){
    if(type == 'celsius'){
        temp.textContent = obj.c + 'c'
        feels.textContent = obj.feelsC + 'c'
    }else if(type == 'fire'){
        temp.textContent = obj.f + 'f'
        feels.textContent = obj.feelsF + 'f'
    }
    humidity.textContent = obj.humidity
    return data = obj
}

const button = document.createElement('button')
button.textContent = 'click'
body.appendChild(button)
button.addEventListener('click', () => {
    if(type == 'celsius'){
        type = 'fire'
    }else if (type == 'fire'){
        type = 'celsius'
    }
    console.log(type)
    console.log(data)
    domData(data)
})