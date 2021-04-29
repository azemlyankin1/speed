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
  const speedSityOrRoad = document.getElementsByName('scr')
  
  
  event.preventDefault()
  const cost = Math.sqrt((speed * road * 254) / car).toFixed(1)
  sum.value = cost + ' км/ч'

    for( let i = 0; i < speedSityOrRoad.length; i++) {
      
      if(speedSityOrRoad[0].checked && cost > 50) {
        sum.style.color = 'red'
      } else if(speedSityOrRoad[1].checked && cost > 90){
        sum.style.color = 'red'
      } else{
        sum.style.color = 'blue'
      }
    }

  return sum
})