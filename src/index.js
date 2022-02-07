import { FirstApp } from './FirstApp'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

ReactDOM.render( <StrictMode>
		<FirstApp title={ "Hello, i'm Goku" }/>
	</StrictMode>
	, document.querySelector( '#root' ) )
