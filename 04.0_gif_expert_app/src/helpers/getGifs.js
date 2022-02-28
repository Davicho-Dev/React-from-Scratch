import config from '../api/config'

const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&${ config.GIPHY_API_KEY }`

	const resp     = await fetch( url )
	const { data } = await resp.json()

 return data
}

export default getGifs
