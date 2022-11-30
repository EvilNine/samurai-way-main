import React from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import {Wrapper, Main} from "./ui/layout";
import {GlobalStyle} from "./ui/global";
import Dialogs from "./components/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props: any) => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Sidebar />
            <Wrapper display={'flex'}>
                <Main>
                    <Route path={"/profile"} render={()=> <Profile /> } />
                    <Route exact path={"/messages"} render={()=> <Dialogs /> }/>
                </Main>
            </Wrapper>
        </BrowserRouter>
    )
}


export default App;
