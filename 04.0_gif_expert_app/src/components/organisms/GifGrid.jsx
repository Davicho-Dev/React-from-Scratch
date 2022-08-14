import {GifItem} from '../molecules'
import {useFetchGifs} from '../../hooks'

const GifGrid = ( { category } ) => {
	const { images, isLoading } = useFetchGifs( category )

	return <>
		<h3>{ category }</h3>
		{ isLoading && <p>Loading...</p> }
		<ol className="card-grid">
			{ images.map( ( gif ) => <GifItem key={ gif.id } { ...gif }/> ) }
		</ol>
	</>
}

export default GifGrid
