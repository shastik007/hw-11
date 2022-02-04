import React from 'react'
import Button from './UI/Button'
import styled from 'styled-components'
import { Checkbox } from '@mui/material'
import DeleteButton from './UI/DeleteButton'

const Li = styled.li`
	max-width: 700px;
	border: 1px solid black;
	align-items: center;
	color: white;
	margin: 0 auto;
	display: grid;
	margin-bottom: 10px;
	padding: 30px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	transition: 0.5s;
	animation: YES ease-in-out 1s;

	&:hover{
		box-shadow: 0 0 15px purple ;
		border: 2px solid pink;

	}

	@keyframes YES {
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
		
	}
	

	& label {
		color: white;
		width: 200px;
		font-size: 25px;
		text-shadow: 0 0 15px pink;
		
	}
	& div {
		color: white;
		width: 100px;
		font-size: 25px;
		text-shadow: 0 0 15px ;
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
						<Checkbox
							checked={el.complete}
							onChange={Checked}
							id={el.id}
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
