import styled from 'styled-components'

const Input = styled.input`
	width: 400px;
	height: 30px;
	border: 2px solid pink;
	box-shadow: 0 0 15px pink;
	text-align: center;
	font-size: 20px;
	color: white;
	outline: none;
	background-color: transparent;
	border-radius: 20px;
    transition: 1s;
     
    &:hover{
       width: 420px;
    }

`

export default Input
