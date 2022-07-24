document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyRed


function partyPurple() {
  document.querySelector('.youtube').src = 'https://www.youtube.com/embed/b4OeCvg3YJs'

}


function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgb(255, 0, 0)'
  document.querySelector('body').style.color = 'white'
}