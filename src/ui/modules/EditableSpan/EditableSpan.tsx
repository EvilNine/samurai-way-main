import React, {ChangeEvent, useState} from 'react';
import {Textfield} from "../../form/Textfield/Textfield";
import { ReactComponent as EditIcon } from "../../../img/Edit.svg";
import {EditableSpanWrapper} from "./Editable.styled";

type PropsType = {
	title:  string
	callBack: (title: string ) => void
	justifyContent?: string
}

const EditableSpan: React.FC<PropsType> = (props) => {
	
	const [edit, setEdit] = useState(false)
	const [title, setTitle] = useState(props.title)
	
	const editHandler = () => {
		setEdit(!edit)
		props.callBack(title)
	}
	
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}
	return (
		<>
			{
				edit
					?
					<Textfield value={title}
							   onChange={onChangeHandler}
							   onBlur={editHandler}
							   autoFocus/>
					:
					<EditableSpanWrapper onDoubleClick={editHandler} justifyContent={props.justifyContent}>
						<span>{title}</span>
						<EditIcon />
					</EditableSpanWrapper>
					
			}
		</>
	);
};
export default EditableSpan;