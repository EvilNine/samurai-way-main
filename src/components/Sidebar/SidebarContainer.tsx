import React, {memo, useEffect} from 'react';
import Sidebar from "./Sidebar";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import { logout} from "../../redux/authReducer";


type mapStateType = {
	// id: number | null,
	// email: string | null,
	isAuth: boolean
	login: string | null
	logout: () => void
}
type mapDispatchType = {
	
	//setAuthUserData: (payload: {id: number | null, login: string | null, email: string | null }) => void
}
export type SidebarPropsType = mapStateType & mapDispatchType

const SidebarContainer = memo((props: SidebarPropsType) => {
	
	return (
		<Sidebar {...props}/>
	);
});

const mapState = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})



export default connect(mapState, {logout})(SidebarContainer);