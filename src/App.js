import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/UI/Card'
import AddTod from './components/AddTod'
import Todos from './components/Todos'

function App() {
	const [todos, setTodos] = useState([])
	console.log(todos)

	useEffect(() => {
		const localDate = JSON.parse(localStorage.getItem('todos'))
		setTodos(localDate ? localDate : [])
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const getObj = (title, date) => {
		setTodos((prev) => {
			return [
				...prev,
				{ title, date, id: Math.random().toString(), complete: false },
			]
		})
	}
	return (
		<div className='App'>
			<Card>
				<h1 className='h1'> To do list </h1>
				<AddTod getObj={getObj} />
			</Card>
			<Card>
				<Todos todos={todos} setTodos={setTodos} />
			</Card>
		</div>
	)
}

export default App
