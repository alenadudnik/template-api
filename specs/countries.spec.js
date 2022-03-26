const expect = require('chai').expect
const CountriesHelper = require('../helpers/countries.helper')

describe('Countries', function() {
	const countriesHelper = new CountriesHelper()

	before(async function() {
		await countriesHelper.getCountries()
	})

	it('response status code is 200', function() {
		expect(countriesHelper.response.statusCode).to.eq(200)
	});

	it('response body contains array at least 3 country codes', function() {
		expect(countriesHelper.response.body.length).to.be.at.least(3)
	});

	it('response body contains array of strings with 2 symbols each', function() {
		for(let country of countriesHelper.response.body){
			expect(country).to.be.a('string')
			expect(country.length).to.eq(2)
			expect(country).to.eq(country.toUpperCase())
		}
	});
})