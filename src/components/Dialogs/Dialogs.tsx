import React, {ChangeEvent} from 'react';
import DialogsUser from "./DialogsUser";
import {DialogColLeft, DialogColRight, DialogsElement} from "./Dialogs.styled";
import DialogMessage from "./DialogMessage";
import {Textarea} from "../../ui/form/Textarea";
import {Button} from "../../ui/form/Button";
import {
    DialogType,
    MessageType
} from "../../redux/dialogsReducer";
import { PropsType} from "./DialogsContainer";


type DialogsPropsType = PropsType

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    
    const dialogsUserData = props.dialogsPage.dialogUser.map((item: DialogType)=> <DialogsUser key={item.id} id={item.id} name={item.name} />)
    const messagesData = props.dialogsPage.messages.map((item: MessageType)=> <DialogMessage key={item.id} id={item.id} message={item.message} />)
    const message = props.dialogsPage.newMessageBody;
    
    const onSendMessageHandler = () => {
        props.sendMessage()
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }
    return (
        <DialogsElement>
            <DialogColLeft>
                {dialogsUserData}
            </DialogColLeft>
            <DialogColRight>
                {messagesData}
                <Textarea value={message} onChange={onChangeMessageHandler}></Textarea>
                <Button onClick={onSendMessageHandler}>Send</Button>
            </DialogColRight>
        </DialogsElement>
    )
};

export default Dialogs;