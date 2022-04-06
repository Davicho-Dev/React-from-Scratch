import { getHeroById, getHeroesByOwner } from './08_import_export'
import { heroesData } from '../data/heroesData'

describe( 'Test in 08 Import Export Heroes', function() {
	test( 'getHeroById must return one hero', () => {
		const id = 1

		expect( getHeroById( id ) ).toEqual( heroesData.find( hero => hero.id === id ) )
	} )

	test( 'getHeroById must return undefined', () => {
		const id = 10

		expect( getHeroById( id ) ).toBe( undefined )
	} )

	test( 'getHeroesByOwner must return DC heroes', () => {
		const owner = 'DC'

		const heroes = heroesData.filter( hero => hero.owner === owner )

		expect( getHeroesByOwner( owner ) ).toEqual( heroes )
	} )

	test( 'getHeroesByOwner must return Marvel heroes', () => {
		const owner = 'Marvel'

		expect( getHeroesByOwner( owner ).length ).toBe( 2 )
	} )
} )
