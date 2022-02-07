import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ( { value } ) => {
	const [ counter, setCounter ] = useState( value )

	const hdlAdd = () => {
		// setCounter( counter + 1 )
		setCounter( (count)=> count+ 1 )
	}

	const hdlAdd = (e) => {
		console.log(e)
	}

	return <>
		<h1>CounterApp</h1>
		<hr/>
		<h2>{ counter }</h2>
		<button onClick={ hdlAdd }>+1</button>
	</>
}

CounterApp.propTypes = {
	value: PropTypes.number,
}
