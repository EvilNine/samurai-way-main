import React from 'react';
import DialogsUser from "./DialogsUser";
import {DialogColLeft, DialogColRight, DialogsElement} from "./Dialogs.styled";
import DialogMessage from "./DialogMessage";
import {Button} from "../../ui/form/Button";
import {
    DialogType,
    MessageType
} from "../../redux/dialogsReducer";
import { PropsType} from "./DialogsContainer";
import { Main } from '../../ui/layout';
import TextareaCustom from "../../ui/form/Textarea/TextareaCustom";
import {Form, Formik} from "formik";


type DialogsPropsType = PropsType
type FormPropsType = {
    message?: string
}
type DialogFormPropsType = {
    onSubmit: (formData: FormPropsType) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    
    const dialogsUserData = props.dialogsPage.dialogUser.map((item: DialogType)=> <DialogsUser key={item.id} id={item.id} name={item.name} />)
    const messagesData = props.dialogsPage.messages.map((item: MessageType)=> <DialogMessage key={item.id} id={item.id} message={item.message} />)
    
    
    const DialogForm = (props: DialogFormPropsType) => {
        return (
            <Formik initialValues={{ message: ''}} onSubmit={props.onSubmit} >
                <Form>
                    <TextareaCustom placeholder={"Enter text"}
                                    component={'textarea'}
                                    name={"message"}/>
                    <Button type="submit">Send</Button>
                </Form>
            </Formik>
        )
    }
    
    
    const onSubmit = (formData: FormPropsType) => {
        formData.message &&  props.sendMessage(formData.message)
    }
    
    return (
        <Main>
            <DialogsElement>
                <DialogColLeft>
                    {dialogsUserData}
                </DialogColLeft>
                <DialogColRight>
                    {messagesData}
                    <DialogForm onSubmit={onSubmit}/>
                </DialogColRight>
            </DialogsElement>
        </Main>
    )
}

export default Dialogs;