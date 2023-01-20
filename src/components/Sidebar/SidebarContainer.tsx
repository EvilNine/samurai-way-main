import React, {useEffect} from 'react';
import Sidebar from "./Sidebar";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import {authApi} from "../../api/authApi";

type mapStateType = {
	// id: number | null,
	// email: string | null,
	isAuth: boolean
	login: string | null
}
type mapDispatchType = {
	getAuthUserData: () => void
	//setAuthUserData: (payload: {id: number | null, login: string | null, email: string | null }) => void
}
export type SidebarPropsType = mapStateType & mapDispatchType

const SidebarContainer = (props: SidebarPropsType) => {
	useEffect(()=>{
		props.getAuthUserData()
	})
	
	return (
		<Sidebar {...props}/>
	);
};

const mapState = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})



export default connect(mapState, {getAuthUserData})(SidebarContainer);