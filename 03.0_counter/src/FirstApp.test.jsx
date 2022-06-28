import {render, screen} from '@testing-library/react'
import FirstApp from './FirstApp'

describe( 'First App test suite', () => {
	const title = 'Hi, i\'m Goku'
		, subtitle = 'Soy un subtitulo'

	it( 'Debe hacer match con el snapshot', () => {
		const { container } = render( <FirstApp title={ title }/> )

		expect( container ).toMatchSnapshot()
	} )

	it( 'Debe mostrar el mensaje "Hola, soy Goku"', () => {
		render( <FirstApp title={ title }/> )
		// screen.debug()
		expect( screen.getByText( title ) ).toBeTruthy()
	} )

	it( 'Debe mostrar el titulo en un h1', () => {
		render( <FirstApp title={ title }/> )

		expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain( title )
	} )

	it( 'Debe mostrar el subtitulo enviado por props', () => {

		render( <FirstApp title={ title } subTitle={ subtitle }/> )

		expect( screen.getAllByText( subtitle ).length ).toBe( 2 )
	} )

} )
