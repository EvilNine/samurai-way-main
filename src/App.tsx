import React from 'react';
import { Redirect, Route} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import {Wrapper, Main} from "./ui/layout";
import {GlobalStyle} from "./ui/global";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export type MessageType = {
	id: number
	message: string
}
export type DialogType = {
	id: number
	name: string
}
export type PostType = {
	id: number
	message: string
	likesCount: number
}
export type ProfilePageType = {
	posts: Array<PostType>
	postText: string
}
export type DialogPageType = {
	dialogUser: Array<DialogType>
	messages: Array<MessageType>
	newMessageBody: string
}
export type SidebarType = {}
export type RootStateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogPageType
	sidebar: SidebarType
}


const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Sidebar />
            <Wrapper display={'flex'}>
                <Main>
                    <Route path={'/'} render={()=><Redirect to="/profile" />} />
                    <Route path={"/profile"} render={()=> <Profile  /> } />
                    <Route exact path={"/messages"} render={()=> <DialogsContainer  /> }/>
                </Main>
            </Wrapper>
		</>
    )
}


export default App;
