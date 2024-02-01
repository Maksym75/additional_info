'use strict'

const box = document.querySelector('.box')

// const newHeight = 100
const newHeight = 100
const newWidth = 400

function changeParams(elem, h, w) {
	// elem.style.height = `${h || 200}px`
	// elem.style.width = `${w || 200}px`
	elem.style.height = `${h ?? 200}px`
	elem.style.width = `${w ?? 200}px`
	// elem.innerHTML = h ?? 200 * w ?? 200  //100  not correct
	elem.innerHTML = (h ?? 200) * (w ?? 200)
}

changeParams(box, newHeight, newWidth)

// ? operator ?? work with - null or Undefined  !!! ONLY!!
let userName // User
// let userName = null // User
// let userName=0  // 0
// let userName=NaN  // NaN
console.log(userName ?? 'User')

let userName1
let userKey

console.log(userName1 ?? userKey ?? 'User')
console.log((userName1 && userKey) ?? 'User')
