import React, {useEffect} from 'react';
import {Redirect, Route} from "react-router-dom";
import Header from "./components/Header";

import {Wrapper} from "./ui/layout";
import {GlobalStyle} from "./ui/global";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users";
import ProfileContainer  from "./components/Profile/ProfileContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Login from './components/Login/Login';
import {useDispatch, useSelector} from "react-redux";
import {initThunk} from "./redux/appReducer";
import {AppStateType} from "./redux/store";
import Loader from "./ui/modules/Loader";


const App = () => {
	
	const dispatch = useDispatch()
	const initialized = useSelector( (state:AppStateType) => state.app.initialized )
	
	useEffect( ()=>{
		dispatch(initThunk())
		
	},[])
	
	if(!initialized) return <Loader />
	
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
