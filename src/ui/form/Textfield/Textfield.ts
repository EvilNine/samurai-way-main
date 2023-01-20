import styled from "styled-components";

export const Textfield = styled.input`
	background-color: #292e38;
	border-color: #05b8d1;
	border-radius: 5px;
	resize: none;
	padding: 10px;
	width: 100%;
	color: #bfc9d9;
	transition: border-color .4s cubic-bezier(.445,.05,.55,.95);
	&:focus, &:active {
		border-color: #1fdffa;
		outline: none;
	}
`