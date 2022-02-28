import config from '../api/config'

const getGifs = async (category) => {
	const resp     = await fetch( `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=20&${ config.GIPHY_API_KEY }` )
	const { data } = await resp.json()

 return data
}

export default getGifs
