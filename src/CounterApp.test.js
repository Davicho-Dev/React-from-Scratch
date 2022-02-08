import { shallow } from 'enzyme'

import { CounterApp } from './CounterApp'

describe( 'Test in CounterApp', () => {
	let wrapper = shallow( <CounterApp/> )

	beforeEach( () => {
		wrapper = shallow( <CounterApp/> )
	} )

	test( 'It must display <CounterApp /> correctly.', () => {
		expect( wrapper ).toMatchSnapshot()
	} )

	test( 'Should display the default value of 100', () => {
		const wrapper = shallow( <CounterApp value={ 100 }/> )

		expect( wrapper.find( 'h2' ).text() ).toBe( '100' )
	} )

	test( 'You must increment with the +1 button', () => {
		wrapper.find( 'button' ).at( 0 ).simulate( 'click' )

		expect( wrapper.find( 'h2' ).text() ).toBe( '11' )
	} )

	test( 'You must decrement with the -1 button', () => {
		wrapper.find( 'button' ).at( 2 ).simulate( 'click' )

		// expect(counterText).toBe(wrapper.find('h2').text())
		expect( wrapper.find( 'h2' ).text() ).toBe( '9' )
	} )
} )
