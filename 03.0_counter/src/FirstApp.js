import PropTypes from 'prop-types'

// export const FirstApp = ( { title, subtitle = `I'm subtitle` } ) => {
export const FirstApp = ( { title, subtitle } ) => {

	// if ( !greeting ) throw new Error( 'The greeting is necessary!' )

	return <>
		<h1>{ title }</h1>
		<hr/>
		<p>{ subtitle }</p>
	</>
}

FirstApp.propTypes = {
	subtitle: PropTypes.string, title: PropTypes.string.isRequired,

}

FirstApp.defaultProps = {
	subtitle: `I'm subtitle`,
}
