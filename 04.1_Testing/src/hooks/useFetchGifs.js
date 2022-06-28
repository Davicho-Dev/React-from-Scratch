import { useEffect, useState } from 'react'

import getGifs from '../helpers/getGifs'

const useFetchGifs = ( category ) => {
	const [ state, setState ] = useState( {
		images   : [],
		isLoading: true
	} )

	useEffect( () => {
		getGifs( category )
			.then( data => {
					setState( {
						images   : data,
						isLoading: false
					} )
				}
			)
	}, [ category ] )

	return state
}

export default useFetchGifs
