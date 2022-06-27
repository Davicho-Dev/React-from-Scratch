import {getImagen} from './11-async-await'

describe( '11-Async-Await test suite', () => {

	it( 'getImage should return image url', async () => {

		const url = await getImagen()
		console.log( url )

		expect( typeof url ).toBe( 'string' )
	} )

	it( 'getImage crash and return error message', async () => {
		const resp = await getImagen()

		expect( resp ).toBe( 'No image' )
	} )

} )
