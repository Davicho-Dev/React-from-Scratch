const characters = [ 'Goku', 'Vegeta', 'Trunks' ]
const [ , , p3 ] = characters
console.log( p3 )

const retornaArreglo = () => {
	return [ 'ABC', 123 ]
}

const [ letters, numbers ] = retornaArreglo()
console.log( letters, numbers )

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const useState = ( valor ) => {
	return [ valor, () => { console.log( 'Hola Mundo' ) } ]
}

const [ nombre, setNombre ] = useState( 'Goku' )

console.log( nombre )
setNombre()





