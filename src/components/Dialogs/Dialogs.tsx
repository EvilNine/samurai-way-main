import React from 'react';
import DialogsUser from "./DialogsUser";
import {DialogColLeft, DialogColRight, DialogsElement} from "./Dialogs.styled";
import DialogMessage from "./DialogMessage";



const Dialogs = () => {

    const dialogsData = [
        {id: 1,name: 'Name1'},
        {id: 2,name: 'Name2'},
        {id: 3,name: 'Name3'},
        {id: 4,name: 'Name4'},
        {id: 5,name: 'Name5'}
    ]

    const messagesData = [
        {id: 1,message: 'hi'},
        {id: 2,message: 'yo'},
        {id: 3,message: 'how are you'},
        {id: 4,message: 'hi'},
        {id: 5,message: 'hi'},
    ]

    return (
        <DialogsElement>
            <DialogColLeft>
                {dialogsData.map(item=> <DialogsUser key={item.id} id={item.id} name={item.name} />)}
            </DialogColLeft>
            <DialogColRight>
                {messagesData.map(item=> <DialogMessage key={item.id} id={item.id} message={item.message} />)}

                {/*<DialogContent messages={messagesData} />*/}
            </DialogColRight>
        </DialogsElement>
    )
};

export default Dialogs;