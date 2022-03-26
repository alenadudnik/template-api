const supertest = require('supertest')

class CasesHelper{
	constructor() {
		this.response = null
	}

	async getCases(countryCode){
		await supertest(process.env.BASE_URL)
			.get(`/country/${countryCode}`)
			.then(res => {
				this.response = res
			})
	}
}

module.exports = CasesHelper