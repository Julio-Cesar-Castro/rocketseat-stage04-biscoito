// Variables
const screenOne = document.querySelector(".screenOne")
const screenTwo =  document.querySelector(".screenTwo")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

// Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click',handleResetClick)
document.addEventListener('keydown', function(e){
  if(e.key === 'Enter' && screenOne.classList.contains('hide')){
    handleResetClick()
  }
})

// functions
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) === randomNumber){
    toggleScreen()

    document.querySelector(".screenTwo h2").innerText = `Você acertou em ${xAttempts} tentativas`
    console.log(`Você acertou em ${xAttempts} tentativas`)
  }

  inputNumber.value = ""
  xAttempts++

  console.log(xAttempts)

}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}