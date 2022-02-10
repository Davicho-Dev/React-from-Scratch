import { useState } from 'react'
import { AddCategoryForm } from '../molecules/AddCategoryForm'

export const GifExpert = () => {
	const [ categories, setCategories ] = useState( [ 'One Punch', 'Samurai X', 'Dragon Ball' ] )

	return <>
		<h2>GifExpert</h2>
		<hr/>
		<AddCategoryForm setCategories={ setCategories }/>
		<ol>
			{ categories.map( ( name, index ) =>
				<li key={ `item-${ index }-${ name }` }>{ name }</li>,
			)
			}
		< /ol>
	</>
}
