const vm = new Vue({
	el: '#app',
	data: {
		//string, number, boolean, array, object
		firstName: "Arta",
		middleName: "Tri",
		lastName: "Pamuda",
		message: "Hello Bro!",
		isActive: true,
		qty: 3,
		number: 7
	},
	methods: {
		getName: function() {
			return 'Hi, ' + this.firstName
		},
		editName: function(newName) {
			this.firstName = newName
			return this.getName()
		}
	},
	computed: {
		creator: function() {
			return 'Arta Tri Pamuda'
		},
		year: function() {
			const date = new Date()
			const thisYear = date.getFullYear()

			return thisYear
		},
		totalBilling: function() {
			return this.qty * 10000
		},
		fullName: function() {
			return this.firstName + ' ' + this.middleName + ' ' + this.lastName
		},
		numberChecker: function() {
			return this.number%2 === 0 ? 'Even Number' : 'Odd Number'
		}
	}
})