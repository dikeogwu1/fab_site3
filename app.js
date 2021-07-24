const score1 = [1, 2, 3, 4, 5, 6]
const score2 = [1, 2, 3, 4, 5, 6]

const btn = document.querySelector('.play')
const alert = document.querySelector('.alert')
const num = document.querySelector('#num')
const secondNum = document.querySelector('#num-1')
const point = document.querySelector('#point-num')

let id = ''
let count = 0
let chance = 8
btn.addEventListener('click', () => {
  chance--
  count++
  const odd1 = Math.floor(1 + Math.random() * score1.length)
  const odd2 = Math.floor(1 + Math.random() * score2.length)
  num.textContent = `${odd1}`
  secondNum.textContent = `${odd2} `
  point.textContent = `you have ${chance} chance left`
  let odds = odd1 + odd2

  switch (odds) {
    case 2:
      if (count == 1) {
        alertText(`craps you lose`, 'danger')
      } else {
        alertText(`play on`, 'deafult')
      }
      break

    case 3:
      if (count == 1) {
        alertText(`craps you lose`, 'danger')
      } else {
        alertText(`play on`, 'deafult')
      }
      break

    case 4:
      if (count == 1) {
        alertText(`you need ${odds} to win`, 'danger')
      } else {
        alertText(`play on`, 'deatult')
      }
      break

    case 5:
      if (count == 1) {
        alertText(`you need ${odds} to win`, 'danger')
      } else {
        alertText(`play on`, 'deatult')
      }
      break

    case 6:
      if (count == 1) {
        alertText(`you need ${odds} to win`, 'danger')
      } else {
        alertText(`play on`, 'deatult')
      }
      break

    case 7:
      if (count == 1) {
        alertText(`you win`, 'success')
      } else {
        alertText(`play on`, 'deafult')
      }
      break

    case 8:
      if (count == 1) {
        alertText(`you need ${odds} to win`, 'danger')
      } else {
        alertText(`play on`, 'deatult')
      }
      break

    case 9:
      if (count == 1) {
        alertText(`you need ${odds} to win`, 'danger')
        let id = 9
      } else {
        alertText(`play on`, 'deatult')
      }
      break

    case 10:
      if (count == 1) {
        alertText(`you need ${odds} to win`, 'danger')
      } else {
        alertText(`play on`, 'deatult')
      }
      break

    case 11:
      if (count == 1) {
        alertText(`you win`, 'success')
      } else {
        alertText(`play on`, 'deafult')
      }
      break

    case 12:
      if (count == 1) {
        alertText(`craps you lose`, 'danger')
      } else {
        alertText(`play on`, 'deafult')
      }
      break

    default:
      alertText(`play`, 'deafult')
      break
  }

  if (count == 1) {
    id = odds
  } else if (count > 1 && id == odds) {
    alertText(`you win`, 'success')
  }

  if (count == 8) {
    alertText(`game over`, 'danger')
  }

  if (
    alert.textContent === 'you win' ||
    alert.textContent === 'game over' ||
    alert.textContent === 'craps you lose'
  ) {
    setTimeout(() => {
      backToDeafult()
    }, 1500)
  }
})

function backToDeafult(params) {
  alert.textContent = 'click to play'
  count = 0
  chance = 8
  num.textContent = '0'
  secondNum.textContent = '0'
}

function alertText(text, action) {
  alert.textContent = text
  alert.classList.add(`${action}`)
}
