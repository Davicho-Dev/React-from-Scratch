import PropTypes from 'prop-types'

export const CounterApp = ( { value } ) => {
	return <>
		<h1>CounterApp</h1>
		<hr/>
		<h2>{ value }</h2>
	</>
}

CounterApp.propTypes = {
	value: PropTypes.number,
}
