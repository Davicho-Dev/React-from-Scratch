import { useState } from 'react'

import { GifGrid } from '../molecules/GifGrid'
import { AddCategoryForm } from '../molecules/AddCategoryForm'

export const GifExpert = () => {
	const [ categories, setCategories ] = useState( [ 'One Punch' ] )

	return <>
		<h2>GifExpert</h2>
		<hr/>
		<AddCategoryForm setCategories={ setCategories }/>
		<ol>
			{ categories.map( ( category, index ) => (
				<GifGrid key={ category + index } category={ category }/>
			) ) }
		< /ol>
	</>
}
