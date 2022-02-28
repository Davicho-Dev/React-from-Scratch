import config from '03.1_Testing/src/api/config'

export const getImg = async () => {
	try {
		const resp = await fetch( `https://api.giphy.com/v1/gifs/random?${ config.GIPHY_API_KEY }` )

		const { data: { images } } = await resp.json()

		const { original } = await images

		return original
	} catch ( err ) {
		return err
	}

}
