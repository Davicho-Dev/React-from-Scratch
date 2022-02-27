import PropTypes from 'prop-types'

export const GifGrid = ( { category } ) => {
	const apiKey = 'xOGPA4J9seMma4rgsruXb7IO9WAhx5El'

	const getGifs = async () => {
		const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=${apiKey}`

		const resp = await fetch( url )
		const { data } = await resp.json()
		console.log( data )
	}

	getGifs()

	return <h3>{ category }</h3>
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
}

