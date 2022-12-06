import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import {Wrapper, Main} from "./ui/layout";
import {GlobalStyle} from "./ui/global";
import {addPost, ChangePostText, RootStateType} from "./redux/state";


const App: React.FC<RootStateType> = (props) => {
    
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Sidebar />
            <Wrapper display={'flex'}>
                <Main>
                    <Route path={"/profile"} render={()=> <Profile posts={props.profilePage.posts}
                                                                   postText={props.profilePage.postText}
                                                                   addPostCallback={addPost}
                                                                   ChangePostText={ChangePostText} /> } />
                    <Route exact path={"/messages"} render={()=> <Dialogs dialogUser={props.dialogsPage.dialogUser} messages={props.dialogsPage.messages} /> }/>
                </Main>
            </Wrapper>
        </BrowserRouter>
    )
}


export default App;
