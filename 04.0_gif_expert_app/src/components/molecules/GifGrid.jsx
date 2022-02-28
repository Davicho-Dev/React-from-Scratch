import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import getGifs from '../../helpers/getGifs'
import GifGridItem from '../molecules/GifGridItem'

export const GifGrid = ( { category } ) => {
	const [ images, setImages ] = useState( [] )

	useEffect( () => {
		getGifs(category).then(data =>	setImages( data ))
	}, [] )

	return (
		<>
			<hr style={{marginTop: '.5rem'}}/>
			<h3 style={{margin: '.5rem 0 1rem 0'}}>{ category }</h3>
			<section className={'grid'}>
				{ images.map( ( img ) => (
						<GifGridItem key={ img.id } { ...img }/>
					)
				) }
			</section>
		</>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}

