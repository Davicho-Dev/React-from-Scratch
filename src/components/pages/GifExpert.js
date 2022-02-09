import { useState } from 'react'

export const GifExpert = () => {
	const hdlAdd = () => {
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
