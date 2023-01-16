import React, {useEffect} from 'react';
import Sidebar from "./Sidebar";
import axios from "axios";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

type mapStateType = {
	// id: number | null,
	// email: string | null,
	isAuth: boolean
	login: string | null
}
type mapDispatchType = {
	setAuthUserData: (payload: {id: number | null, login: string | null, email: string | null }) => void
}
export type SidebarPropsType = mapStateType & mapDispatchType

const SidebarContainer = (props: SidebarPropsType) => {
	useEffect(()=>{
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
				withCredentials: true
			})
			.then(res => {
				//const {id,login,email} = {...res.data.data}
				if( res.data.resultCode === 0 ) {
					props.setAuthUserData(res.data.data)
				}
				
			})
	})
	
	return (
		<Sidebar {...props}/>
	);
};

const mapState = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})



export default connect(mapState, {setAuthUserData})(SidebarContainer);