const icon = document.querySelector('.tag')
const subIcon = document.querySelector('.isSity')


icon.addEventListener('click', () => {
  subIcon.style.display = (subIcon.style.display == 'none') ? 'block' : 'none'
})



const speedLimitRadio = document.querySelector('.speedLimitRadio')
const input = document.querySelector('.radioInput')
const active = document.querySelector('.active')



speedLimitRadio.addEventListener('click', () => {
  input.style.display = (input.style.display == 'none') ? 'flex' : 'none'
  active.style.display = (active.style.display == 'none') ? 'block' : 'none'

})








const submit = document.querySelector('#submit')
submit.addEventListener('click', (event) => {
  const speed = +document.getElementById('speed').value
  const road = +document.getElementById('road').value
  const car = +document.getElementById('car').value
  const sum = document.getElementById('sum')
  event.preventDefault()

    
  
  let cost = Math.sqrt((speed * road * 254) / car).toFixed(1)

  maxSpeed(cost, sum)

  return sum.value = cost + ' км/ч'
})




function maxSpeed(x, y) {
  if (x >= 50) {
    y.style.color = 'red'
  } else {
    y.style.color = 'rgb(104, 104, 235)'
  }
}



