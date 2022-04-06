import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { GifExpert } from './components/pages/GifExpert'

import './index.css'
import 'animate.css'

ReactDOM.render(
	<StrictMode>
		<GifExpert/>
	</StrictMode>,
	document.getElementById( 'root' ),
)
