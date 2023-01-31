import React from 'react';
import {Redirect, Route} from "react-router-dom";
import Header from "./components/Header";

import {Wrapper} from "./ui/layout";
import {GlobalStyle} from "./ui/global";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users";
import ProfileContainer  from "./components/Profile/ProfileContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Login from './components/Login/Login';


const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<SidebarContainer />
			<Wrapper display={'flex'}>
				<Route path={'/'} render={()=><Redirect to="/profile" />} />
				<Route path={'/profile/:userId?'} render={()=> <ProfileContainer  />  } />
				<Route path={'/messages'} render={()=> <DialogsContainer  /> }/>
				<Route path={'/users'} render={()=> <UsersContainer />} />
				<Route path={'/login'} render={()=> <Login />}/>
			</Wrapper>
		</>
	)
}


export default App;
