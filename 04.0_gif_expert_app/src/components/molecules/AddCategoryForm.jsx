import PropTypes from 'prop-types'
import { useState } from 'react'

import { AddCategoryInput } from '../atoms/AddCategoryInput'

export const AddCategoryForm = ( { setCategories } ) => {
	const [ inputValue, setInputValue ] = useState( '' )

	const hdlInputChange = ( { target } ) => {
		setInputValue( target.value )
	}

	const hdlSubmit = ( e ) => {
		e.preventDefault()
		if ( inputValue.trim().length > 2 ) {
			setCategories( ( categories ) => [ inputValue, ...categories ] )
			setInputValue( '' )
		}
	}

	return <form onSubmit={ hdlSubmit }>
		<AddCategoryInput placeholder={'Insert category'} value={ inputValue } onChange={ hdlInputChange }/>
	</form>
}

AddCategoryForm.propTypes = {
	setCategories: PropTypes.func.isRequired,
}

