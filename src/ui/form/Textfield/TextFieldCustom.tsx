import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

const Text = styled(Field)`
	background-color: #292e38;
	border: 1px solid #05b8d1;
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

const TextFieldCustom: React.FC<any & {className?: string}> = (props) => {
	console.log(props)
	return <Text component={props.component}
				 type={props.type}
				 name={props.name} {...props} />;
}

export default TextFieldCustom