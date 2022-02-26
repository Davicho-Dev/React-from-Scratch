import { getGreeting } from './02_template_string'

describe( 'Test in 02 Templates String', () => {

	test( 'must return "Hello David"', () => {
		const name = 'David'

		const greeting = getGreeting( name )

		expect( greeting ).toBe( `Hello ${ name }` )
	} )

	test('must return "Hello Carlos"', ()=>{
		const greeting = getGreeting()

		expect(greeting).toBe('Hello Carlos')
	})
} )
