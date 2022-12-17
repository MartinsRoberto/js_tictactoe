let start = false
let restart = document.querySelector('.restart')

const two = document.querySelector('.two')
const cpu = document.querySelector('.cpu')

const xPoints = document.querySelector('.x-points')
const oPoints = document.querySelector('.o-points')

let xWins = 0
let oWins = 0

let opponent

const boxes = document.querySelectorAll('.box')

two.addEventListener('click', startGameTwo)
cpu.addEventListener('click', startGameCpu)
restart.addEventListener('click', reset)

function startGameTwo() {
  two.style.display = 'none'
  cpu.style.display = 'none'
  restart.style.display = 'inline-block'

  start = true
  opponent = 'two'
}

function startGameCpu() {
  two.style.display = 'none'
  cpu.style.display = 'none'
  restart.style.display = 'inline-block'

  start = true
  opponent = 'cpu'
}

let x = true


boxes.forEach((e) => {
  e.addEventListener('click', (box) => {
    if (start && box.target.innerHTML == false) {
      if (opponent == 'two') {
        if (x) {
          box.target.innerHTML = `<div class="value x">x</div`
          x = false
        }
        else {
          box.target.innerHTML = `<div class="value o">o</div`
          x = true
        }
      }
      else if (opponent == 'cpu') {
        box.target.innerHTML = `<div class="value x">x</div`
        cpuPlay()
      }
      checkWinner()
    }
  })
})

function checkDraw() {
  let counter = 0

  for (let index = 0; index < boxes.length; index++) {
    if (boxes[index].childNodes[0] != undefined) {
      counter++
    }
  }

  if (counter == 9) {
    declareWinner('draw')
  }
}

function cpuPlay() {
  const boxNumber = getRndInteger(0, 8)

  checkDraw()

  if (boxes[boxNumber].childNodes.length == 0) {
    boxes[boxNumber].innerHTML = `<div class="value o">o</div`
  }
  else {
    cpuPlay()
  }

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkWinner() {
  const b1 = document.querySelector('.box:nth-child(1)')
  const b2 = document.querySelector('.box:nth-child(2)')
  const b3 = document.querySelector('.box:nth-child(3)')
  const b4 = document.querySelector('.box:nth-child(4)')
  const b5 = document.querySelector('.box:nth-child(5)')
  const b6 = document.querySelector('.box:nth-child(6)')
  const b7 = document.querySelector('.box:nth-child(7)')
  const b8 = document.querySelector('.box:nth-child(8)')
  const b9 = document.querySelector('.box:nth-child(9)')

  // HORIZONTAL 1
  if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
    let b1Value = b1.querySelector('.value').innerHTML
    let b2Value = b2.querySelector('.value').innerHTML
    let b3Value = b3.querySelector('.value').innerHTML

    if (b1Value == 'x' && b2Value == 'x' && b3Value == 'x') {
      declareWinner('x')
    }
    else if (b1Value == 'o' && b2Value == 'o' && b3Value == 'o') {
      declareWinner('o')
    }
  }

  // HORIZONTAL 2
  if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
    let b4Value = b4.querySelector('.value').innerHTML
    let b5Value = b5.querySelector('.value').innerHTML
    let b6Value = b6.querySelector('.value').innerHTML

    if (b4Value == 'x' && b5Value == 'x' && b6Value == 'x') {
      declareWinner('x')
    }
    else if (b4Value == 'o' && b5Value == 'o' && b6Value == 'o') {
      declareWinner('o')
    }
  }

  // HORIZONTAL 3
  if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b7Value = b7.querySelector('.value').innerHTML
    let b8Value = b8.querySelector('.value').innerHTML
    let b9Value = b9.querySelector('.value').innerHTML

    if (b7Value == 'x' && b8Value == 'x' && b9Value == 'x') {
      declareWinner('x')
    }
    else if (b7Value == 'o' && b8Value == 'o' && b9Value == 'o') {
      declareWinner('o')
    }
  }

  // VERTICAL 1
  if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b1Value = b1.querySelector('.value').innerHTML
    let b4Value = b4.querySelector('.value').innerHTML
    let b7Value = b7.querySelector('.value').innerHTML

    if (b1Value == 'x' && b4Value == 'x' && b7Value == 'x') {
      declareWinner('x')
    }
    else if (b1Value == 'o' && b4Value == 'o' && b7Value == 'o') {
      declareWinner('o')
    }
  }

  // VERTICAL 2
  if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
    let b2Value = b2.querySelector('.value').innerHTML
    let b5Value = b5.querySelector('.value').innerHTML
    let b8Value = b8.querySelector('.value').innerHTML

    if (b2Value == 'x' && b5Value == 'x' && b8Value == 'x') {
      declareWinner('x')
    }
    else if (b2Value == 'o' && b5Value == 'o' && b8Value == 'o') {
      declareWinner('o')
    }
  }

  // VERTICAL 3
  if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b3Value = b3.querySelector('.value').innerHTML
    let b6Value = b6.querySelector('.value').innerHTML
    let b9Value = b9.querySelector('.value').innerHTML

    if (b3Value == 'x' && b6Value == 'x' && b9Value == 'x') {
      declareWinner('x')
    }
    else if (b3Value == 'o' && b6Value == 'o' && b9Value == 'o') {
      declareWinner('o')
    }
  }

  // DIAGONAL 1
  if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b1Value = b1.querySelector('.value').innerHTML
    let b5Value = b5.querySelector('.value').innerHTML
    let b9Value = b9.querySelector('.value').innerHTML

    if (b1Value == 'x' && b5Value == 'x' && b9Value == 'x') {
      declareWinner('x')
    }
    else if (b1Value == 'o' && b5Value == 'o' && b9Value == 'o') {
      declareWinner('o')
    }
  }

  // DIAGONAL 2
  if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b3Value = b3.querySelector('.value').innerHTML
    let b5Value = b5.querySelector('.value').innerHTML
    let b7Value = b7.querySelector('.value').innerHTML

    if (b3Value == 'x' && b5Value == 'x' && b7Value == 'x') {
      declareWinner('x')
    }
    else if (b3Value == 'o' && b5Value == 'o' && b7Value == 'o') {
      declareWinner('o')
    }
  }


  // DRAW
  checkDraw()
}

function declareWinner(winner) {
  const gameResult = document.querySelector('.game-result')
  gameResult.style.display = 'block'

  if (winner == 'x') {
    xWins++
    gameResult.innerHTML = "X WIN"
    xPoints.innerHTML = `X: ${xWins}`
  }
  else if (winner == 'o') {
    oWins++
    gameResult.innerHTML = "O WIN"
    oPoints.innerHTML = `O: ${oWins}`
  }
  else if (winner == 'draw') {
    gameResult.innerHTML = "DRAW"
  }

  let boxesToRemove = document.querySelectorAll('.box div')

  for (let index = 0; index < boxesToRemove.length; index++) {
    boxesToRemove[index].parentNode.removeChild(boxesToRemove[index])
  }

  start = false

  two.style.display = 'inline-block'
  cpu.style.display = 'inline-block'
  restart.style.display = 'none'

  setTimeout(() => {
    gameResult.style.display = 'none'
  }, 1000)
}

function reset() {
  xWins = 0
  oWins = 0

  start = false

  xPoints.innerHTML = "X:"
  oPoints.innerHTML = "O:"

  let boxesToRemove = document.querySelectorAll('.box div')

  for (let index = 0; index < boxesToRemove.length; index++) {
    boxesToRemove[index].parentNode.removeChild(boxesToRemove[index])
  }

  two.style.display = 'inline-block'
  cpu.style.display = 'inline-block'
  restart.style.display = 'none'
}