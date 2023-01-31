import React from 'react';
import {Textfield} from "../../ui/form/Textfield/Textfield";
import {LoginInputWrapper, LoginTitle, LoginWrapper} from "./Login.styled";
import {Button} from "../../ui/form/Button";
import {Field, reduxForm} from "redux-form";
import TextFieldCustom from "../../ui/form/Textfield/TextFieldCustom";

type FormPropsType = {
	email?: string
	password?: string
	remember?: boolean
}

const LoginForm = (props:any) => {
	const loginHandler = ()=> {
	
	}
	return <form onSubmit={props.handleSubmit}>
		<LoginInputWrapper>
			<Field placeholder={"email"}
				   component={ (props:any) => {
					   //console.log(props)
					   return <><Textfield
						   value={props.val}
						   onChange={props.onChange}/>
					   </>
				   }}
				   name={"email"}/>
		</LoginInputWrapper>
		<LoginInputWrapper>
			<TextFieldCustom placeholder={"password"}
							 type={'password'}
							 component={'input'}
							 name={"password"}/>
		</LoginInputWrapper>
		<LoginInputWrapper>
			<label>
				<Field type={"checkbox"}
					   name={"remember"}
					   component={'input'}/>
				remember me
			</label>
		</LoginInputWrapper>
		<Button onClick={ loginHandler }>Login</Button>
	</form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props: any) => {
	const onSubmit = (formData: FormPropsType) => {
		console.log(formData)
	}
	return (
		<LoginWrapper>
			<LoginTitle>Login</LoginTitle>
			<LoginReduxForm onSubmit={onSubmit}/>
		</LoginWrapper>
	);
};

export default Login;