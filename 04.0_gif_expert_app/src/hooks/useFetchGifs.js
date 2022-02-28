import { useEffect, useState } from 'react'

import getGifs from '../helpers/getGifs'

const useFetchGifs = ( category ) => {
	const [ state, setState ] = useState( {
		images: [],
		onLoad: true
	} )

	useEffect( () => {
		getGifs( category )
			.then( data => {
					setTimeout( () => {
						setState( {
							images: data,
							onLoad: false
						} )
					}, 500 )
				}
			)
	}, [] )

	return state
}

export default useFetchGifs
