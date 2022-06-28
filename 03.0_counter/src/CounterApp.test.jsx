import {fireEvent, render, screen} from '@testing-library/react'
import {CounterApp} from './CounterApp'

describe( 'CounterApp test suite', () => {
	const initialValue = 10

	it( 'Debe hacer match con el snapshot', () => {
		const { container } = render( <CounterApp value={ initialValue }/> )

		expect( container ).toMatchSnapshot()
	} )

	it( 'Debe mostrar el valor inicial de 10', () => {
		render( <CounterApp value={ initialValue }/> )

		expect( screen.getByText( initialValue ).innerHTML ).toBe( initialValue.toString() )
		expect( screen.getByText( initialValue ) ).toBeTruthy()
	} )

	it( 'Debe incrementar con el botón +1', () => {
		render( <CounterApp value={ initialValue }/> )

		fireEvent.click( screen.getByText( '+1' ) )

		expect( screen.getByText( initialValue + 1 ) ).toBeTruthy()
	} )

	it( 'Debe decrementar con el botón -1', () => {
		render( <CounterApp value={ initialValue }/> )

		fireEvent.click( screen.getByText( '-1' ) )

		expect( screen.getByText( initialValue - 1 ) ).toBeTruthy()
	} )

	it( 'Debe retornar el initialValue', () => {
		render( <CounterApp value={ initialValue }/> )

		fireEvent.click( screen.getByText( '+1' ) )
		fireEvent.click( screen.getByText( '+1' ) )
		fireEvent.click( screen.getByText( '+1' ) )
		// fireEvent.click(screen.getByText('Reset'))
		fireEvent.click( screen.getByRole( 'button', { name: 'btn-reset' } ) )

		expect( screen.getByText( initialValue ) ).toBeTruthy()
	} )
} )
