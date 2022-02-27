const apiKey = 'xOGPA4J9seMma4rgsruXb7IO9WAhx5El'

export const getImg = async () => {
	try {
		const resp = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )

		const { data: { images } } = await resp.json()

		const { original } = await images

		return original
	} catch ( err ) {
		return err
	}

}
