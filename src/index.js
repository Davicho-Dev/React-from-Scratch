import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { FirstApp } from './FirstApp'

ReactDOM.render( <StrictMode>
		<FirstApp title={`Hi, i'm Goku`}/>
	</StrictMode>
	, document.querySelector( '#root' ) )
