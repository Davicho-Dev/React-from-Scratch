import {usContext} from './06-deses-obj'

describe( '06-deses-obj test suite', () => {
	it( 'Should return user with latlng', () => {

		const testUser = {
			nombreClave: 'Cap',
			anios: 38,
			latlng: {
				lat: 14.1232,
				lng: -12.3232,
			},
		}

		const char = usContext( {
			clave: 'Cap', edad: 38,
		} )

		expect( testUser ).toEqual( char )
	} )
} )
