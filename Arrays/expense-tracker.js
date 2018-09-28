const 
  account = {
	name: 'Chidera',
	expenses: [],
	income: [],
	addExpense: function (description, amount) {
		this.expenses.push({
			description,
			amount
		})
	},
	addIncome: function (description, amount) {
		this.income.push({
			description,
			amount
		})
	},
	getAccountSummary: function () {
		let totalExpenses = 0,
			totalIncome = 0;

		this.expenses.forEach((expense) => totalExpenses += expense.amount)
		this.income.forEach((income) => totalIncome += income.amount)

		accountBalance = totalIncome - totalExpenses;

		return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income and $${totalExpenses} in expenses `
	}
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('contract', 10000)
console.log(account.getAccountSummary())





