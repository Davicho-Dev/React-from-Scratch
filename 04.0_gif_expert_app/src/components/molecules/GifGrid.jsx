import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import config from '../../api/config'

export const GifGrid = ( { category } ) => {

	const getGifs = async () => {
		const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&${ config.GIPHY_API_KEY }`

		const resp     = await fetch( url )
		const { data } = await resp.json()

		setImages( data )
	}
	const [ images, setImages ] = useState( [] )

	useEffect( () => {
		getGifs(category)
	}, [] )

	return (
		<>
			<hr style={ { marginTop: '.5rem' } }/>
			<h3 style={ { margin: '.5rem 0 1rem 0' } }>{ category }</h3>
			<section className={ 'grid' }>
				{ images.map( ( {
													id,
													images: { downsized_medium },
													title
												} ) => (
						<figure className={ 'grid__card grid__card--hover' }>
							<img className={ 'grid__card__img' } src={ downsized_medium?.url } alt=''/>
							<figcaption className={ 'grid__card__title' }>{ title }</figcaption>
						</figure>
					)
				) }
			</section>
		</>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}

