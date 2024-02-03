'use strict'

// * https://www.javascripttutorial.net/es6/javascript-iterator/
// * https://bitsofco.de/for-in-vs-for-of/
// * https://stackoverflow.com/questions/14379274/how-to-iterate-over-a-javascript-object

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '11/10/1992',

	showPublicData: function () {
		console.log(`${this.name} ${this.birthday}`)
	},
}
// * for in
for (let key in user) console.log(user[key])
for (let key in user) console.log(key)

// * for of
// or (let key of user) console.log(key) // script.js:16 Uncaught TypeError: user is not iterableat script.js:16:17
const arr = ['b', 'a', 'c']
// * create a custom method
Array.prototype.someMethodMine = function () {}
console.dir(arr)
// * for in -method someMethodMine exist
// for (let key in arr) console.log(arr[key])
for (let key in arr) console.log(key)

// *  in for of -- not someMethodMine,  not exist
for (let key of arr) console.log(key)

// ? Делаем не итерируемый oбьект - ИТЕРИРУЕМЫМ !!!!!

const salaries = {
	John: 500,
	Anna: 5000,
	Ivan: 1000,

	sayHello: function () {
		console.log('Say Hello')
	},
}
// Надо добавить в Обьект метод с именем Symbol.iterator
salaries[Symbol.iterator] = function () {
	return {
		current: this.John,
		last: this.Anna,
		next() {
			if (this.current < this.last) {
				this.current += 600
				return { done: false, value: this.current }
			} else {
				return { done: true }
			}
		},
	}
}
// Ручной вывод метода next
const iterator = salaries[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

for (let res of salaries) console.log(res)

// Добавляем метод Symbol.iterator
user[Symbol.iterator] = function () {
	// Возвращает итератор для объекта
	let properties = Object.keys(this)
	let index = 0

	return {
		next: () => {
			return {
				value: this[properties[index]],
				done: index++ === properties.length,
			}
		},
	}
}

// Используем for...of для итерации по объекту
for (let value of user) {
	console.log(value)
}
