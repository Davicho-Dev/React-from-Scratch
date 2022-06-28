export const getImagen = async () => {
	try {
		const apiKey = 'xOGPA4J9seMma4rgsruXb7IO9WAhx5El'
		const resp = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )
		const { data } = await resp.json()
		const { url } = data.images.original

		return url
	} catch ( err ) {
		return 'No image'
	}
}
