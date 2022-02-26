import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { CounterApp } from './CounterApp'

ReactDOM.render( <StrictMode>
		<CounterApp value={10}/>
	</StrictMode>
	, document.querySelector( '#root' ) )
