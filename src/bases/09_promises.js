import { getHeroById } from './08_import_export'

// const promise = new Promise( ( resolve, reject ) => {
// 	setTimeout( () => {
// 		const hero = getHeroById( 2 )
// 		// console.log( hero )
// 		resolve( hero )
// 	}, 2000 )
// } )
//
// promise.then( ( hero ) => {
// 	console.log( hero )
// } )
// 	.catch( err => console.warn( err ) )

const getHeroByIdAsync = ( id ) => {
	return new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			const hero = getHeroById( id )
			// console.log( hero )
			hero ? resolve( hero ) : reject( 'No se pudo encontrar el hero' )
		}, 2000 )
	} )
}

getHeroByIdAsync( 2 ).then( console.log ).catch( console.warn )
