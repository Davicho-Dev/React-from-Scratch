describe( 'Tests on the demo.test.js file', () => {

	test( 'The strings must be the same', () => {
		// 1. Initialization
		const message = 'Hello World!'

		// 2. Stimulus
		const message2 = `Hello World!`

		// 3. Observing behavior
		expect( message ).toBe( message2 )
	} )
} )
