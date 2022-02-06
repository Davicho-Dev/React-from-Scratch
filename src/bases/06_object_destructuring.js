// Desestructuración
// Asignación Desestructurate
const persona = {
	nombre: 'Tony',
	edad: 45,
	clave: 'Ironman',
}

// const { edad, clave, nombre, } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ( { clave, nombre, edad, rango = 'Capitán' } ) => {

	// console.log( nombre, edad, rango );

	return {
		keyName: clave,
		age: edad,
		latlng: {
			lat: 14.1232,
			lng: -12.3232,
		},
	}

}

const { keyName, age, latlng: { lat, lng } } = useContext( persona )

console.log( keyName, age )
console.log( lat, lng )


