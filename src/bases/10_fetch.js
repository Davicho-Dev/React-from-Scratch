const apiKey = '8USjb1fsED0LBChxnU5KjJA2drKjB9hl'

const request = fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )

request.then( resp => resp.json() )
	.then( ( { data: { images } } ) => {
		const { original: { url } } = images

		const img = document.createElement( 'img' )
		img.src = url

		document.body.append( img )
	} )
	.catch( console.error )
