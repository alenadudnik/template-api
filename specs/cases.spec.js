const expect = require('chai').expect
const CountriesHelper = require('../helpers/countries.helper')
const CasesHelper = require('../helpers/cases.helper')

describe('Cases', function() {
	const countriesHelper = new CountriesHelper()
	const casesHelper = new CasesHelper()
	let country
	let newCases = 0
	let newDeaths = 0

	before(async function() {
		await countriesHelper.getCountries()
		country = countriesHelper.response.body[0]
		await casesHelper.getCases(country)
		for await(let covidCase of casesHelper.response.body){
			newCases += +covidCase['New_cases']
			newDeaths += +covidCase['New_deaths']
		}
	})

	it('response status code is 200', function() {
		expect(casesHelper.response.statusCode).to.eq(200)
	});

	it('response body contains require country', function() {
		expect(casesHelper.response.body[0]['Country_code']).to.eq(country)
	});

	it('response body contains correct value of cumulative cases', function() {
		expect(+casesHelper.response.body[casesHelper.response.body.length-1]['Cumulative_cases']).to.eq(newCases)
	});

	it('response body contains correct value of cumulative cases', function() {
		expect(+casesHelper.response.body[casesHelper.response.body.length-1]['Cumulative_deaths']).to.eq(newDeaths)
	});
})