import PropTypes from 'prop-types'

export const FirstApp = ( { greeting } ) => {

	// if ( !greeting ) throw new Error( 'The greeting is necessary!' )

	return <>
		<h1>{ greeting }</h1>
		<hr/>
		<p>My first app</p>
	</>
}

FirstApp.propTypes = {
	greeting: PropTypes.string.isRequired,
	// other: PropTypes.number,
}
