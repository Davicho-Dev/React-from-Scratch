import config from '02.0_intro_js/src/api/config'

const request = fetch( `https://api.giphy.com/v1/gifs/random?${ config.GIPHY_API_KEY }` )

request.then( resp => resp.json() )
	.then( ( { data: { images } } ) => {
		const { original: { url } } = images

		const img = document.createElement( 'img' )
		img.src = url

		document.body.append( img )
	} )
	.catch( console.error )
