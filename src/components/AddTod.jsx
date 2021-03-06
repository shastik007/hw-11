import React, { useReducer } from 'react'
import Input from './UI/Input'
import ReactDOM from 'react-dom'
import Backdrop from './UI/Backdrop'
import ErrorModal from './UI/ErrorModal'
import Buttonn from './UI/Button'
import styled from 'styled-components'

const Form = styled.form`
	display: flex;
	justify-content: space-around;
`

const reducer = (state, action) => {
	if (action.type === 'INPUT_CHANGE') {
		return {
			value: action.val,
			modal: null,
			date: new Date().toLocaleDateString(),
		}
	}

	if (action.type === 'MODAL') {
		return {
			value: '',
			modal: { massage: 'your task could not be created !!', title: 'please fill in all fields !' },
		}
	}

	if (action.type === 'MODAL_200') {
		return {
			value: '',
			modal: null,
			date: '',
		}
	}
}

const AddTod = (props) => {
	const [state, dispatchVal] = useReducer(reducer, {
		value: '',
		modal: null,
		date: new Date().toLocaleDateString(),
	})

	const onChange = (e) => {
		dispatchVal({ type: 'INPUT_CHANGE', val: e.target.value })
	}

	const confirm = (e) => {
		dispatchVal({ type: 'MODAL_200' })
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (state.value.trim() === '') {
			dispatchVal({ type: 'MODAL' })
			return
		}

		props.getObj(state.value, state.date)
		state.value = ' '
	}

	return (
		<Form onSubmit={onSubmit}>
			<Input
				placeholder='enter something'
				value={state.value}
				onChange={onChange}
				type='text'
			/>
			<Buttonn type='submit'>add</Buttonn>
			{state.modal && (
				<ErrorModal
					confirm={confirm}
					title={state.modal.title}
					massage={state.modal.massage}
				/>
			)}
		</Form>
	)
}

export default AddTod
