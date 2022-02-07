import { FirstApp } from './FirstApp'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

ReactDOM.render( <StrictMode>
		<FirstApp/>
		{/*<FirstApp greeting={ `Hello, i'm Goku` }/>*/}
	</StrictMode>
	, document.querySelector( '#root' ) )
