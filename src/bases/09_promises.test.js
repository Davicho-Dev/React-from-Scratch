import { getHeroByIdAsync } from './09_promises'
import { heroesData } from '../data/heroesData'

describe( 'Test in 09 Promises', () => {
	test( 'getHeroByID should return an async hero', ( done ) => {
		const id = 1

		getHeroByIdAsync( id ).then( hero => {
			expect( hero ).toBe( heroesData[ 0 ] )

			done()
		} )
	} )

	test( 'getHeroByID must return an error if the hero does not exist.', ( done ) => {
		const id = 10

		getHeroByIdAsync( id ).catch( err => {
			expect( err ).toBe( 'Hero could not be found.' )

			done()
		} )
	} )
} )
