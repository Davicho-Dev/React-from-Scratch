import PropTypes from 'prop-types'

export const CounterApp = ( { value } ) => {

	const hdlAdd = (e) => {
		console.log(e)
	}

	return <>
		<h1>CounterApp</h1>
		<hr/>
		<h2>{ value }</h2>
		<button onClick={ hdlAdd }>+1</button>
	</>
}

CounterApp.propTypes = {
	value: PropTypes.number,
}
