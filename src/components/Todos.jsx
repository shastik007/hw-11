import React from 'react'
import Button from './UI/Button'
import styled from 'styled-components'

const Li = styled.li`
	max-width: 700px;
	align-items: center;
	color: white;
	margin: 0 auto;
	display: grid;
	margin-bottom: 10px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	transition: 1s;

	& label {
		width: 300px;
	}
	& div {
		width: 200px;
	}
	& input {
		width: 40px;
	}

	& .checked {
		text-decoration: line-through;
	}
`

const Todos = (props) => {
	const Delete = (e) => {
		props.setTodos([...props.todos.filter((el) => el.id !== e.target.id)])
	}
	const Checked = (e) => {
		props.setTodos(
			props.todos.map((el) => {
				if (el.id === e.target.id) {
					el.complete = !el.complete
				}
				return el
			}),
		)
	}
	return (
		<ul>
			{props.todos.map((el) => {
				return (
					<Li key={el.id}>
						<label className={el.complete ? 'checked' : ''}>
							{el.title}
						</label>
						<div>{el.date}</div>
						<input
							checked={el.complete}
							onChange={Checked}
							id={el.id}
							type='checkbox'
						/>
						<Button onClick={Delete} id={el.id}>
							delete
						</Button>
					</Li>
				)
			})}
		</ul>
	)
}

export default Todos
