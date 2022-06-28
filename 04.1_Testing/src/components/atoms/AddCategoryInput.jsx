import PropTypes from 'prop-types'

const AddCategoryInput = ( { value, onChange, placeholder } ) => <input
	type={ 'text' }
	value={ value }
	onChange={ onChange }
	placeholder={placeholder}
	style={{margin: '1rem 0', fontSize:'1rem', padding: '.25rem'}}
/>

AddCategoryInput.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default AddCategoryInput