const apiKey = 'xOGPA4J9seMma4rgsruXb7IO9WAhx5El'

const request = fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )

request.then( resp => resp.json() )
	.then( ( { data: { images } } ) => {
		const { original: { url } } = images

		const img = document.createElement( 'img' )
		img.src = url

		document.body.append( img )
	} )
	.catch( console.error )
