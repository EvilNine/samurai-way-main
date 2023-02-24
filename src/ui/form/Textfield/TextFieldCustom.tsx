import React from 'react';

import styled from 'styled-components';


const Text = styled.input`
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
const TextFieldCustom: React.FC<any> = ({ input, meta, ...rest }: any) => {
	console.log(meta.error)
	return <Text type="text" {...input} {...rest} />
};

export default TextFieldCustom


// const Text = styled(Field)`
// 	background-color: #292e38;
// 	border: 1px solid #05b8d1;
// 	border-radius: 5px;
// 	resize: none;
// 	padding: 10px;
// 	width: 100%;
// 	color: #bfc9d9;
// 	transition: border-color .4s cubic-bezier(.445,.05,.55,.95);
// 	&:focus, &:active {
// 		border-color: #1fdffa;
// 		outline: none;
// 	}
// `
//
// const TextFieldCustom: React.FC<any & {className?: string}> = (props) => {
// 	console.log(props)
// 	return <Text component={props.component}
// 				 type={props.type}
// 				 name={props.name} {...props} />;
// }