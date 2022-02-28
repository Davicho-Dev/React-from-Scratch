import PropTypes from 'prop-types'
import useFetchGifs from '../../hooks/useFetchGifs'

import GifGridItem from '../molecules/GifGridItem'

export const GifGrid = ( { category } ) => {

	const { images, onLoad } = useFetchGifs( category )

	return onLoad
				 ? <h1>loading</h1>
				 : (
					 <>
						 <h3 style={ { margin: '1rem 0' } }>{ category }</h3>
						 <section className={ 'grid' }>
							 { images.map( ( img ) => (
									 <GifGridItem key={ img.id } { ...img }/>
								 )
							 ) }
						 </section>
					 </> )

}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}

