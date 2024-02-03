'use strict'

// *   https://learn.javascript.ru/call-apply-decorators
// *
// *

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '11/10/1992',

	showPublicData: function () {
		console.log(`${this.name} ${this.birthday}`)
	},
}
