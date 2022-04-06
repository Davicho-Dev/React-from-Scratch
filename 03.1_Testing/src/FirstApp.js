import PropTypes from 'prop-types'

export const FirstApp = ( { title, subtitle } ) => {
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
