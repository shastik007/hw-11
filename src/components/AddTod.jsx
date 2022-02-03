import React, { useReducer } from 'react'
import Input from './UI/Input'
import ReactDOM from 'react-dom'
import Backdrop from './UI/Backdrop'
import ErrorModal from './UI/ErrorModal'

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
			modal: { massage: 'adsfasdfa', title: 'asdfasdfa' },
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
	}

	return (
		<form onSubmit={onSubmit}>
			<Input value={state.value} onChange={onChange} type='text' />
			<button type='submit'>add</button>
			{state.modal && (
				<ErrorModal
					confirm={confirm}
					title={state.modal.title}
					massage={state.modal.massage}
				/>
			)}
		</form>
	)
}

export default AddTod
