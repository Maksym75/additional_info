'use strict'

// ?  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// разкоментировать все!! до ---------------------------
// const obj = {
// 	name: 'Test',
// 	name2: 'Test2',
// }

// // console.log(obj)
// // let id = Symbol('ID')
// let id2 = Symbol('ID')
// // console.log(id == id2) // false
// // obj[id] = 1
// // console.log(obj[id])
// // console.log(obj['ID'])

// const obj2 = {
// 	name: 'Test',
// 	// [Symbol('iD')]: 1,
// 	[id2]: 33,
// 	getId: function () {
// 		return this[id2]
// 	},
// }

// console.log(obj2.getId())
// console.log(
// 	'Object.getOwnPropertySymbols(obj2)',
// 	Object.getOwnPropertySymbols(obj2)
// )
// console.log(obj2[Object.getOwnPropertySymbols(obj2)[0]])

// // console.log(obj2[iD])
// // console.log(obj2['iD'])
// console.log(obj2)
// for (let value in obj2) {
// 	console.log(value) // *  Only name! no Simbol!!
// }
// ----------------------------------------------------------------

const myAwesomeDB = {
	movies: [],
	actors: [],
	// id: 1,
	[Symbol('id')]: 123,
	[Symbol.for('idd')]: 1234,
}
// сторонний код библиотеки
myAwesomeDB.id = 6575585858
console.log(myAwesomeDB['id'])
console.log(myAwesomeDB[Symbol.for('idd')])
console.log(myAwesomeDB)

// * !!!!!!    Меняем значение Symbol('id)
myAwesomeDB[Object.getOwnPropertySymbols(myAwesomeDB)[0]] = 321
console.log(myAwesomeDB)
