import {getUser, getUsuarioActivo} from './05-funciones'

describe( '05-functions test suite', () => {
	it( 'getUser debe retornar un objeto', () => {
		const testUser = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		}
		const user = getUser()

		expect( testUser).toStrictEqual( user )
	} )

	it( 'getUsuarioActivo debe retornar un objeto', () =>{
		const name = 'David'
		const testUser = {uid: 'ABC567', username: name}
		const user = getUsuarioActivo(name)

		expect(testUser).toEqual(user)
	} )
} )
