import { getImg } from './11_async_await'

describe( 'Test in 11 Async Await', () => {

	test( 'You must return the url of the image', async () => {
		const { url } = await getImg()
		console.log( url )

		expect( url.includes( 'https://' ) ).toBe( true )
	} )

} )
