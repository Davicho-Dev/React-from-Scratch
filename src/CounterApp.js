import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ( { value } ) => {
	const [ counter, setCounter ] = useState( value )

	const hdlAdd = () => setCounter( counter + 1 )

	const hdlSubtract = () => setCounter( counter - 1 )

	const hdlReset = () => setCounter( value )

	return <>
		<h1>CounterApp</h1>
		<hr/>
		<h2>{ counter }</h2>
		<button onClick={ hdlAdd }>+1</button>
		<button onClick={ hdlReset }>Reset</button>
		<button onClick={ hdlSubtract }>-1</button>
	</>
}

CounterApp.propTypes = {
	value: PropTypes.number,
}

CounterApp.defaultProps = {
	value: 10
}
