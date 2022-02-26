const greeting = ( nombre ) => `Hello, ${ nombre }`

const getUser = () => ({
	uid: 'ABC123', username: 'El_Papi1502',
})

// Tarea
const getActiveUser = ( name = 'Peter' ) => ({
	uid: 'ABC567', username: name,
})

export { greeting, getUser, getActiveUser }
