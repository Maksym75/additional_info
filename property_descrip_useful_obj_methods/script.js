'use strict'

// * All OBJ mwthods -- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object
//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '11/10/1992',

	showPublicData: function () {
		console.log(`${this.name} ${this.birthday}`)
	},
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'))
Object.defineProperty(user, 'name', {
	writable: false,
})
// user.name = '8yb898oooy'  // script.js:15 Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'at script.js:15:11

// ? Создаем новое св=во gender
Object.defineProperty(user, 'gender', {
	value: 'male',
	writable: true,
})
console.log(Object.getOwnPropertyDescriptor(user, 'gender'))
//*  writable   если true  то св-во в обьекте можно изменить или только для чтения если фалс
// * enumerable  если true  то св-во будет перечисляться в Циклах. Или нет если Фалс
//*  configurable  если true  то св-во можно удалить а атрибуты можно изменить . Или нет если Фалс

// ? Например хотим чтоб дату рождения можно было ввесть только раз и потом нельзя изменить
const user1 = {
	name: 'Alex',
	surname: 'Smith',
	// birthday: '11/10/1992',
	showPublicData: function () {
		console.log(`${this.name}`)
	},
}
// Object.defineProperty(user1, 'birthday', {
// 	value: prompt('Enter date!'),
// 	enumerable: true,
// 	configurable: true,
// })
// console.log(Object.getOwnPropertyDescriptor(user1, 'birthday'))
// console.log(user1)
// ? Например хотим чтоб при переборе обьекта не было методов обьекта (showPublicData)
// for (let key in user1) console.log(key) // name surname showPublicData birthday

Object.defineProperty(user1, 'showPublicData', {
	enumerable: false,
})
// for (let key in user1) console.log(key) // name surname birthday

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))
const user3 = {}

Object.defineProperties(user3, {
	name: {
		value: 'Alex',
		writable: false, // можно не указывать и так будет фолс
		enumerable: true,
		configurable: true,
	},
	birthday: {
		value: '10/11/2001',
		writable: false,
		enumerable: true,
		configurable: true,
	},
	showPublicData: {
		value: function () {
			return console.log(`${this.name} +=== ${this.birthday}`)
		},
		writable: false,
		enumerable: false,
		configurable: true,
	},
})
console.log(user3)
console.log(user3.showPublicData())

//*  Определяет, являются ли два значения различимыми (то есть, одинаковыми)
Object.is()

console.log(Object.is(user1.name, user3.name))

// * =============================================================================================
const birthday = Symbol('birthday')

const user4 = {
	name: 'Alex',
	surname: 'Smith',
	[birthday]: '11/10/1992',

	showPublicData: function () {
		console.log(`${this.name} ${this.birthday}`)
	},
}
for (let key in user4) console.log(key)
// Object.defineProperty(user4, birthday, {
// 	writable: true,
// 	enumerable: true,
// 	configurable: true,
// })
console.log(Object.getOwnPropertyDescriptor(user4, birthday))
for (let key in user4) console.log(key)
