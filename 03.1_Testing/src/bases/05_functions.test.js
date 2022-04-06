import '@testing-library/jest-dom'
import { getActiveUser, getUser, greeting } from './05_functions'

describe( 'Test in 05 Functions', () => {

	test( 'greeting must return a string', () => {
		const name = 'David'

		expect( greeting( name ) ).toBe( `Hello, ${ name }` )
	} )

	test( 'getUser must return an object', () => {
		expect( getUser() ).toEqual( { uid: 'ABC123', username: 'El_Papi1502' } )
	} )

	test( 'getActiveUser must return an object with custom username', () => {
		const name = 'David'

		expect( getActiveUser( name ) ).toEqual( { uid: 'ABC567', username: name } )
	} )

	test( 'getActiveUser must return an object with default username "Peter"', () => {
		expect( getActiveUser() ).toEqual( { uid: 'ABC567', username: 'Peter' } )
	} )
} )
