import retornaArreglo from './07-deses-arr'

describe( '07-deses-arr test suite', () => {
	it( 'Should return types', () => {
		const [ letters, numbers ] = retornaArreglo()

		expect( letters ).toBe( 'ABC' )
		expect( numbers ).toBe( 123 )

		expect( typeof letters ).toBe( 'string' )
		expect( typeof numbers ).toBe( 'number' )

		expect( letters ).toEqual( expect.any( String ) )

	} )
} )
