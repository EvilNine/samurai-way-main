import React from 'react';
import {LoginInputWrapper, LoginTitle, LoginWrapper} from "./Login.styled";
import {Button} from "../../ui/form/Button";
import {Field, Form, Formik, FormikProps} from "formik";
import {Textfield} from "../../ui/form/Textfield/Textfield";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import Checkbox from "../../ui/form/Checkbox";
import * as Yup from 'yup';


type LoginFormType = {
	onSubmit: (formData: LoginFormValuesType) => void
}
type LoginFormValuesType = {
	// captcha: string
	rememberMe: boolean
	password: string
	email: string
}

const loginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	
})

//TODO add field validation

const LoginForm: React.FC<LoginFormType> = (props) => {
	
	const { onSubmit } = props
	
	return <Formik initialValues={{ email: '', password: '', rememberMe: false}}
				   validationSchema={loginSchema}
				   onSubmit={onSubmit}>
		{(formik: FormikProps<LoginFormValuesType>) => {
			
			const { errors, touched, validateField, validateForm } = formik
			
			return (
				<Form>
					<LoginInputWrapper>
						<Field name="email"
							   placeholder="email"
							   type={"text"}
							   label={"email"}
							   touched={touched}
							   as={Textfield} />
					</LoginInputWrapper>
					<LoginInputWrapper>
						<Field name="password"
							   type={"password"}
							   label={"password"}
							   form={{touched, errors}}
							   
							   placeholder={"password"}
							   as={Textfield} />
					</LoginInputWrapper>
					<LoginInputWrapper>
						<Checkbox type={'checkbox'}
								  label={'remember me'}
								  name={'rememberMe'}/>
					</LoginInputWrapper>
					<Button type="submit">Login</Button>
				</Form>
			)
			
		}}
	</Formik>
}

const LoginPage: React.FC = () => {
	
	const isAuth = useSelector( (state: AppStateType) => state.auth.isAuth )
	const dispatch = useDispatch()
	
	const onSubmit = (formData: LoginFormValuesType) => {
		dispatch(login(formData.email, formData.password, formData.rememberMe))
	}
	
	if (isAuth) {
		return <Redirect to={'/profile'}/>
	}
	
	return (
		<LoginWrapper>
			<LoginTitle>Login</LoginTitle>
			<LoginForm onSubmit={onSubmit}/>
		</LoginWrapper>
	);
};

export default LoginPage;