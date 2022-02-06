const apiKey = '8USjb1fsED0LBChxnU5KjJA2drKjB9hl'

// const getImgPromise = () =>
// 	new Promise( resolve => resolve( 'https://ajajadjasjdajsd' ) )
//
// getImgPromise().then( console.log )

const getImg = async () => {
	try {

		const resp = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )

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
