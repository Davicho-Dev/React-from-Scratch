import React from 'react'
import ReactDOM from 'react-dom'

console.log( 'Hello World!' )

const greeting = <h1>Hi</h1>

console.log(greeting)


const root = document.querySelector('#root')

ReactDOM.render(greeting,root)
