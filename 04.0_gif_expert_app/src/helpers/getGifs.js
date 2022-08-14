const getGifs = async ( category ) => {
	// API Key
	// xOGPA4J9seMma4rgsruXb7IO9WAhx5El
	const resp = await fetch( `https://api.giphy.com/v1/gifs/search?api_key=xOGPA4J9seMma4rgsruXb7IO9WAhx5El&q=${ category }&limit=8` )
	const { data } = await resp.json()


	return data.map( ( { id, images, title } ) => ( { id, url: images?.downsized_medium?.url, title } ) )
}

export default getGifs
