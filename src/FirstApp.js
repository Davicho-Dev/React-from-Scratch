// import React, { Fragment } from 'react'

export const FirstApp = () => {
	const sayHello = 'Hello World'
	// const sayHello = 123.23213213
	// const sayHello = true
	// const sayHello = [1,2,3,4,5,6]
	// const sayHello = {
	// 	name: 'David',
	// 	age: 30,
	// }

	return <>
		<h1>{ sayHello }</h1>
		{/*<pre>{ JSON.stringify(sayHello, null, 3) }</pre>*/ }
		<hr/>
		<p>My first app</p>
	</>
}
