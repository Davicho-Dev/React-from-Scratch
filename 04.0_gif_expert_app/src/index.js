import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { GifExpert } from './components/pages/GifExpert'

ReactDOM.render(
	<StrictMode>
		<GifExpert/>
	</StrictMode>,
	document.getElementById( 'root' ),
)

