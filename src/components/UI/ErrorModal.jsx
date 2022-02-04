import React from 'react'
import classes from './Modal.module.css'
import BackDrop from './Backdrop'
import ReactDOM from 'react-dom'
import Button from './Button'
const ModalPortal = (props) => {
	return (
		<div className={classes.modal}>
			<BackDrop />
			<header className={classes.header}>
				<h2>{props.massage}</h2>
			</header>
			<div className={classes.content}>
				<p>{props.title }</p>
			</div>
			<footer className={classes.actions}>
				{props.children}
				<Button id={props.id} onClick={props.onConfirm}>
					OK
				</Button>
			</footer>
		</div>
	)
}
const Modal = (props) => {
	return ReactDOM.createPortal(
		<ModalPortal
			title={props.title}
			massage={props.massage}
			onConfirm={props.confirm}
		/>,
		document.getElementById('modal_root'),
	)
}
export default Modal
