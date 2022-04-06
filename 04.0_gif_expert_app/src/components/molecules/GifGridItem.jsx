const GifGridItem = ( { title, images } ) => (
	<figure className={ 'grid__card grid__card--hover animate__animated animate__fadeIn' }>
		<img className={ 'grid__card__img' } src={ images?.downsized_medium?.url } alt={ title }/>
		<figcaption className={ 'grid__card__title' }>{ title }</figcaption>
	</figure>
)

export default GifGridItem
