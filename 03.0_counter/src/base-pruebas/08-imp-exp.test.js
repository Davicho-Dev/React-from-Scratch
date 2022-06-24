import {getHeroById, getHeroesByOwner} from './08-imp-exp'
import heroes from '../data/heroes'

describe( '08-imp-exp test suite', () => {
	it( 'Should return hero by id', () => {
		const id = 1
		const hero = getHeroById( id )

		expect( hero ).toEqual( { id: id, name: 'Batman', owner: 'DC' } )
	} )

	it( 'Should return undefined if not exist', () => {
		const id = 100
		const hero = getHeroById( id )

		expect( hero ).toBeUndefined()
	} )

	it( 'Should return Marvel Heroes', () => {
		const owner = 'Marvel'
		const heroList = getHeroesByOwner( owner )

		expect( heroList.length ).toBe(2)
		expect( heroList ).toEqual( heroes.filter( ( hero ) => hero.owner === owner ) )
	} )

	it( 'Should return DC Heroes', () => {
		const owner = 'DC'
		const heroList = getHeroesByOwner( owner )

		expect( heroList.length ).toBe( 3 )
		expect( heroList ).toEqual(
			[
				{
					id: 1,
					name: 'Batman',
					owner: 'DC',
				},
				{
					id: 3,
					name: 'Superman',
					owner: 'DC',
				},
				{
					id: 4,
					name: 'Flash',
					owner: 'DC',
				},
			] ) // Bad practice
		expect( heroList ).toEqual( heroes.filter( ( hero ) => hero.owner === owner ) )
	} )
} )
