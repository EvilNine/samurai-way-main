import React from 'react';
import DialogsUser from "./DialogsUser";
import {DialogColLeft, DialogColRight, DialogsElement} from "./Dialogs.styled";
import DialogMessage from "./DialogMessage";
import {DialogPageType} from "../../redux/state";


const Dialogs: React.FC<DialogPageType> = (props) => {
    const dialogsUserData = props.dialogUser.map(item=> <DialogsUser key={item.id} id={item.id} name={item.name} />)
    const messagesData = props.messages.map(item=> <DialogMessage key={item.id} id={item.id} message={item.message} />)
    return (
        <DialogsElement>
            <DialogColLeft>
                {dialogsUserData}
            </DialogColLeft>
            <DialogColRight>
                {messagesData}
            </DialogColRight>
        </DialogsElement>
    )
};

export default Dialogs;