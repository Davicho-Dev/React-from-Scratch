import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { GifExpert } from './components/pages/GifExpert'

import './index.css'

ReactDOM.render(
	<StrictMode>
		<GifExpert/>
	</StrictMode>,
	document.getElementById( 'root' ),
)
