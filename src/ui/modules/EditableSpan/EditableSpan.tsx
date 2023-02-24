import React, {ChangeEvent, useState} from 'react';
import {Textfield} from "../../form/Textfield/Textfield";
import { ReactComponent as EditIcon } from "../../../img/Edit.svg";
import {EditableSpanWrapper} from "./Editable.styled";
import {Field, Form, Formik, FormikProps} from "formik";

type PropsType = {
	title:  string
	callBack: (title: string ) => void
	justifyContent?: string
}
type EditStatusFormType = {
	status?: string
	// onSubmit: (formData: {status: string}) => void
}
const EditableSpan: React.FC<PropsType> = (props) => {
	
	const [edit, setEdit] = useState(false)
	const [title, setTitle] = useState(props.title)
	
	const onEditHandler = () => {
		setEdit(true)
	}
	
	const onBlurHandler = (status: {status:string}) => {
		console.log(status)
		setEdit(false)
		//props.callBack({...status})
	}
	
	
	const EditForm = () => {
		return	<Formik initialValues={{ status: ''}}
						onSubmit={ (status) => onBlurHandler(status) }>
					{(formik: FormikProps<EditStatusFormType>) => {
						const { touched, handleBlur} = formik
						return (
							<Form>
								<Field name="status"
									   type={"text"}
									   label={"status"}
									   autoFocus
									   onBlur={handleBlur}
									   touched={touched}
									   value={props.title}
									   as={Textfield} />
							</Form>
						)
					}}
				</Formik>
	}
	
	return (
		<>
			{
				edit
					? <EditForm />
					:
					<EditableSpanWrapper onDoubleClick={onEditHandler} justifyContent={props.justifyContent}>
						<span>{title}</span>
						<EditIcon />
					</EditableSpanWrapper>
					
			}
		</>
	);
};
export default EditableSpan;