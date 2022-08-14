import {useState} from 'react'

const AddCategory = ( { onNewValue } ) => {
	const [ inputValue, setInputValue ] = useState( '' )

	const hdlSubmit = ( e ) => {
		e.preventDefault()

		if ( inputValue.trim().length >= 1 ) {
			onNewValue( inputValue )

			setInputValue( '' )
		}
	}

	return <form onSubmit={ hdlSubmit }>
		<input
			type="search"
			placeholder="Find Gifs"
			value={ inputValue }
			onChange={ ( { target: { value } } ) => setInputValue( value ) }/>
	</form>
}

export default AddCategory
