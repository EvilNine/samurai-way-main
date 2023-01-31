import React from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/store";
import {connect} from "react-redux";

type MapPropsType = {
	isAuth: boolean
}
type DispatchPropsType = {
}

const mapStateRedirect = (state: AppStateType): MapPropsType => ({
	isAuth: state.auth.isAuth
})

const WithAuthRedirect = ( Component: React.FC) => {
	const ContainerComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
		if (!props.isAuth) return <Redirect to={'/login'}/>
		return <Component {...props} />
	}
	return connect(mapStateRedirect)(ContainerComponent)
};

export default WithAuthRedirect;