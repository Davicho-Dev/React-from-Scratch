import { returnArray } from './07_array_destructuring'

describe( 'Test in 07 Array Destructuring', () => {
	test( 'It must return a string and a number.', () => {
		const [ letters, numbers ] = returnArray()

		expect( letters ).toBe( 'ABC' )
		expect( typeof letters ).toBe( 'string' )

		expect( numbers ).toBe( 123 )
		expect( typeof numbers ).toBe( 'number' )
	} )
} )
