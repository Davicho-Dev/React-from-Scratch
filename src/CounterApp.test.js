import { shallow } from 'enzyme'

import { CounterApp } from './CounterApp'

describe( 'Test in CounterApp', () => {
	test( 'It must display <CounterApp />correctly.', () => {
		const wrapper = shallow( <CounterApp/> )

		expect( wrapper ).toMatchSnapshot()
	} )

	test( '', () => {
		const wrapper = shallow( <CounterApp value={ 100 }/> )

		expect( wrapper.find( 'h2' ).text() ).toBe( '100' )
	} )
} )
