import {getHeroByIdAsync} from './09-promesas'
import {getHeroById} from './08-imp-exp'

describe( '09-promises test suite', () => {

	test( 'Should return hero', ( done ) => {

		const id = 1

		getHeroByIdAsync( id )
			.then( hero => {
				expect( hero ).toEqual( getHeroById( id ) )

				done()
			} )

	} )

	test( 'Should return error if hero not exist', ( done ) => {

		const id = 100

		getHeroByIdAsync( id )
			.then( hero => {
				expect( hero ).toBeFalsy()

				done()
			} )
			.catch( err => {

				expect( err ).toBe( `No se pudo encontrar el héroe ${ id }` )

				done()

			} )

	} )

} )
