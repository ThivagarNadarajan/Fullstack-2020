import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotif } from '../reducers/notificationReducer'

/* Disconnected component, requires useDispatch from redux */
// const AnecdoteForm = () => {
// 	const dispatch = useDispatch()

// 	const addAnecdote = async (event) => {
// 		event.preventDefault()
// 		const content = event.target.anecdote.value
// 		event.target.anecdote.value = ''
// 		dispatch(createAnecdote(content))

// 		dispatch(setNotif(`You created an anecdote '${content}'`, 5))
// 	}

// 	return (
// 		<div>
// 			<h2>create new</h2>
// 			<form onSubmit={addAnecdote}>
// 				<div><input name="anecdote" /></div>
// 				<button type="submit">create</button>
// 			</form>
// 		</div>
// 	)
// }

const AnecdoteForm = (props) => {

	const addAnecdote = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		props.createAnecdote(content)
		props.setNotif(`You created an anecdote '${content}'`, 5)
	}

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div><input name="anecdote" /></div>
				<button type="submit">create</button>
			</form>
		</div>
	)
}

const mapDispatchToProps = {
	createAnecdote, setNotif
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)