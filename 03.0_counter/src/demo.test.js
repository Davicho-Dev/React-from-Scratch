// test('Esta prueba no debe fallar', () => {
// 	if ( false ){
// 		throw new Error('Esta prueba no debe fallar');
// 	}
// })

describe('Test <DemoComponent/>', () => {

	it( 'Esta prueba no debe fallar', () => {
		// 1. Initialization
		const message = 'Hello World';

		// 2. Estimulo
		const message2 = message.trim();

		// 3. Observar el comportamiento... esperado
		expect( message ).toBe( message2 );
	} )

})
