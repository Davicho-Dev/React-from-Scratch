import {useState} from 'react'

import {v4} from 'uuid'

import {AddCategory} from '../components/molecules'
const HomePage = () => {
	const [ categories, setCategories ] = useState( [ 'One Punch' ] )

	return ( <section>
		<h1>Gif Expert App</h1>

		<AddCategory onNewValue={ onAddCategory }/>

	</section> )
}

export default HomePage

