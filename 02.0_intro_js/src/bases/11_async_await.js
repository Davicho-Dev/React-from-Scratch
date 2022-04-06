import config from '02.0_intro_js/src/api/config'

// const getImgPromise = () =>
// 	new Promise( resolve => resolve( 'https://ajajadjasjdajsd' ) )
//
// getImgPromise().then( console.log )

const getImg = async () => {
	try {

		const resp = await fetch( `https://api.giphy.com/v1/gifs/random?${ config.GIPHY_API_KEY }` )

		const { data: { images } } = await resp.json()

		const { original: { url } } = images

		const img = document.createElement( 'img' )

		img.src = url

		document.body.append( img )
	} catch ( err ) {
		console.error( err )
	}

}

getImg()
