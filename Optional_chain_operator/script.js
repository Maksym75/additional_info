'use strict'

const box = document.querySelector('.box')
const block = document.querySelector('.block')

console.log(block) // null  dont finded on page
console.log(box)
// console.log(block.textContent) // here mistake and code below didnt touch
// if (block) {
// 	console.log(block.textContent)
// }
console.log(block?.textContent) // CORRECT - operator - ?  check value from the left side
console.log(1 + 3)

const userData = {
	name: 'Ivan',
	age: null,
	say: function () {
		console.log('Hello')
	},
	someArray: [{ dd: 9888 }, { kkk: '8yy8' }],
}
// if (userData && userData.skills && userData.skills.js) {
// 	console.log(userData.skills.js)
// }
// console.log(userData.skills.js)  // script.js:19 Uncaught TypeError: Cannot read properties of undefined (reading 'js')

userData.say()
userData.gay?.() // ! Проверка существует ли Фу !!!!
userData.Array?.push({ mmm: 876 }) // without ? will be mistake & stop code
console.log(userData?.skills?.js)
userData.someArray.push({ mmm: 876 })
console.log(userData.someArray)
