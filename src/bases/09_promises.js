import { getHeroById } from './08_import_export'

export const getHeroByIdAsync = ( id ) => {

	return new Promise( ( resolve, reject ) => {

		setTimeout( () => {

			const hero = getHeroById( id )

			hero ? resolve( hero ) : reject( 'Hero could not be found.' )

		}, 1500 )

	} )

}
