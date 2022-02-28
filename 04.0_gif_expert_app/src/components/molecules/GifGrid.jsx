import PropTypes from 'prop-types'
import { useEffect } from 'react'

import config from '../../api/config'

export const GifGrid = ( { category } ) => {

	const getGifs = async () => {
		const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&${ config.GIPHY_API_KEY }`

		const resp     = await fetch( url )
		const { data } = await resp.json()

		setImages( data )
	}

	useEffect( () => {
		getGifs(category)
	}, [] )

	return (
		<>
			<h3>{ category }</h3>
		</>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}

