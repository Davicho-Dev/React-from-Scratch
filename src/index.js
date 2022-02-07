import { CounterApp } from './CounterApp'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

ReactDOM.render( <StrictMode>
		<CounterApp value={ 6543 }/>
	</StrictMode>
	, document.querySelector( '#root' ) )
