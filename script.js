let start = false

let two = document.querySelector('.two')
let cpu = document.querySelector('.cpu')
let restart = document.querySelector('.restart')

two.addEventListener('click', startGame)
cpu.addEventListener('click', startGame)

restart.addEventListener('click', resetGame)

function startGame() {
  two.style.display = 'none'
  cpu.style.display = 'none'
  restart.style.display = 'inline-block'

  start = true
}

function resetGame() {
  two.style.display = 'inline-block'
  cpu.style.display = 'inline-block'
  restart.style.display = 'none'
}

const boxes = document.querySelectorAll('.box')

let x = true
let o = false
boxes.forEach((e) => {
  e.addEventListener('click', (box) => {
    if (box.target.innerHTML == false) {
      if (x) {
        box.target.innerHTML = `<div class="value x">x</div`
        x = false
      }
      else {
        box.target.innerHTML = `<div class="value o">o</div`

        x = true
      }
    }

    checkWinner()
  })
})

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
}

function declareWinner(winner){



  let boxesToRemove = document.querySelectorAll('.box div')

  for (let index = 0; index < boxesToRemove.length; index++) {
    boxesToRemove[index].parentNode.removeChild(boxesToRemove[index])
  }
}