
import { shallow } from 'enzyme'
import React from 'react'

import { FirstApp } from './FirstApp'

describe( 'Test in FirstApp', () => {
	test( 'It must display <FirstApp />correctly.', () => {
		// const greeting = `Hi, i'm Goku`

		// const { getByText } = render( <FirstApp title={ greeting }/> )

		// wrapper.getByText()

		// expect( getByText( greeting + '!' ) ).toBeInTheDocument()
		const greeting = `Hi, i'm Goku`

		const wrapper = shallow(<FirstApp title={greeting}/>)

		expect( wrapper ).toMatchSnapshot()

	} )
} )
