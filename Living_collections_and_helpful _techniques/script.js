'use strict'

const boxesQuery = document.querySelectorAll('.box')
const boxesGet = document.getElementsByClassName('box')

//получаем отпечаток DOM коллекции на момент вызова remove
boxesQuery[0].remove() // NodeList(3) [div.box, div.box.this, div.box]

//  Отслеживает все изменения в DOM дереве на момент вызова remove и даёт текущий результат
boxesGet[0].remove() // HTMLCollection [div.box]
for (let i = 0; i < 5; i++) {
	const div = document.createElement('div')
	div.classList.add('box')
	document.body.append(div)
}

//*  1Создание массива из массивоподобного объекта
console.log(Array.from(boxesGet))

console.log(boxesQuery) //  NodeList(3) [div.box, div.box, div.box]
console.log(boxesGet) ///  HTMLCollection(3) [div.box, div.box, div.box]
// console.log(document.body.children)  // HTMLCollection(4) [div.box, div.box.this, div.box, script]

boxesQuery.forEach(box => {
	console.log(box) // OK
	if (box.matches('.this')) {
		console.log('This one')
	}
})

// если не поставим индекс 2 то будет null   т.к. выше удалили 2 элемента
console.log(boxesQuery[2].closest('.wrapper'))
// boxesQuery.boxesGet(box => console.log(box)) // script.js:9 Uncaught TypeError: boxesQuery.boxesGet is not a function
