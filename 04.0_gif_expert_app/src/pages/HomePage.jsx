import {useState} from 'react'

import {v4} from 'uuid'

import {AddCategory} from '../components/molecules'
import {GifGrid} from '../components/organisms'

const HomePage = () => {
	const [ categories, setCategories ] = useState( [ 'One Punch' ] )

	const onAddCategory = ( newCat ) => {
		if ( categories.includes( newCat ) ) {
			return
		}

		setCategories( prevState => [ newCat, ...prevState ] )
	}

	return ( <section>
		<h1>Gif Expert App</h1>

		<AddCategory onNewValue={ onAddCategory }/>

		{ categories.map( category => <GifGrid key={ v4() } category={ category }/> ) }

	</section> )
}

export default HomePage

