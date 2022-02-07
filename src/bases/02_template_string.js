const firstName = 'Fernando'
const lastName = 'Herrera'

// const fullName = firstName + ' ' + lastName;
const fullName = `${ firstName } ${ lastName }`

console.log( fullName )

export const getGreeting = ( name = 'Carlos' ) => {
	return `Hello ${ name }`
}

console.log( `This is a text: ${ getGreeting( name ) }` )
