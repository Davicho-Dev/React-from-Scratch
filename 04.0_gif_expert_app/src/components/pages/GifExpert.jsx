import { useState } from 'react'

import GifGrid from '../molecules/GifGrid'
import AddCategoryForm from '../molecules/AddCategoryForm'

export const GifExpert = () => {
	const [ categories, setCategories ] = useState( [ 'One Punch' ] )

	return <>
		<h2>GifExpert</h2>
		<AddCategoryForm setCategories={ setCategories }/>
		<hr/>
		<ol>
			{ categories.map( ( category ) => (
				<GifGrid key={ category } category={ category }/>
			) ) }
		< /ol>
	</>
}
