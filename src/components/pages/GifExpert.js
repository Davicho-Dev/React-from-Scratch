import { useState } from 'react'

export const GifExpert = () => {
	const [ categories, setCategories ] = useState( [ 'One Punch', 'Samurai X', 'Dragon Ball' ] )

	const hdlAdd = () => {
		setCategories( [ ...categories, 'Demon Hunter' ] )
	}

	return <>
		<h2>GifExpert</h2>
		<hr/>
		<button  onClick={hdlAdd}>Add</button>
		<ol>
			{ categories.map( ( name, index ) =>
				<li key={ `item-${ index }-${ name }` }>{ name }</li>,
			)
			}
		< /ol>
	</>
}
