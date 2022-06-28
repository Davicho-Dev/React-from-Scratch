import PropTypes from 'prop-types'

import GifGridItem from '../molecules/GifGridItem'
import useFetchGifs from '../../hooks/useFetchGifs'

const GifGrid = ( { category } ) => {
	const {
			images,
			isLoading
		} = useFetchGifs( category )

	return <>
		<h3 className={ 'animate__animated animate__fadeIn' } style={ { margin: '1rem 0' } }>{ category }</h3>
		{ isLoading
			&& <h1 className={ 'animate__animated animate__flash' }>Loading</h1>
		}
		<section className={ 'grid' }>
			{ images.map( img => (
						<GifGridItem key={ img.id } { ...img }/>
					)
				)
			}
		</section>
	</>
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}

export default GifGrid
