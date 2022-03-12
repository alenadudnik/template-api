const supertest = require('supertest')

class CountriesHelper{
	constructor() {
		  this.response = null
	}

	async getCountries(){
		await supertest(process.env.BASE_URL)
			.get('/country_codes')
			.then(res => {
				this.response = res
				console.log(res.body)
			})
	}
}

module.exports = CountriesHelper