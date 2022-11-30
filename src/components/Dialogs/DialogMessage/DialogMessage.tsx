import React from 'react';
import {MessageItem} from "./DialogMessage.styled";

type DialogMessagePropsType = {
    id: number
    message: string
}

const DialogMessage: React.FC<DialogMessagePropsType> = (props) => {
    return (
        <MessageItem>{props.message}</MessageItem>
    )
};

export default DialogMessage;