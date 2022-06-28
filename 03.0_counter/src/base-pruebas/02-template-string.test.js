import getSaludo from './02-template-string'

describe('02-template-string test suite',()=>{

	test('getSaludo debe retornar "Hola David"', () => {
		const name = 'David'
		const message = getSaludo(name)

		expect(message).toBe(`Hola ${name}`)
	})

})
