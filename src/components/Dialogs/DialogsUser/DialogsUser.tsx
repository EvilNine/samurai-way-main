import React from 'react';
import Avatar from '../../../ui/modules/Avatar';
import {DialogsUserElement, DialogsUserName, DialogUserImg} from "./DialogsIten.styled";
import {NavLink} from "react-router-dom";


type DialogPropsType = {
    id: number
    name: string
}

const DialogsUser: React.FC<DialogPropsType> = (props) => {
    return (
        <DialogsUserElement>
            <NavLink to={`/messages/${props.id}`} >
                <DialogUserImg>
                    <Avatar src={'https://img.freepik.com/premium-photo/hipster-head-with-empty-space-3d-render-illustration_1172-983.jpg?size=338&ext=jpg&uid=R433202&ga=GA1.2.1420375084.1669209175'} />
                </DialogUserImg>
                <DialogsUserName>
                    {props.name}
                </DialogsUserName>
            </NavLink>
        </DialogsUserElement>
    )
};

export default DialogsUser;