import PropTypes from 'prop-types'

export const AddCategoryInput = ( { value, onChange } ) => <input
	value={ value }
	onChange={ onChange }
	type={ 'text' }
/>

AddCategoryInput.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

