import React, {useEffect} from 'react';
import Profile from './Profile';

import {connect, useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile, ProfileInitianalStateType, updateStatus} from '../../redux/profileReducer';
import {AppStateType} from "../../redux/store";
import {PostType, ProfileType} from "../../types";
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {log} from "util";

type mapStateType = {
	profile: ProfileType | null
	posts: Array<PostType>
	isAuth: boolean
	status: string
	authorizedUserId: string
}
type mapDispatchType = {
	getUserProfile: (userId: string) => void
	getStatus: (userId: string) => void
	updateStatus: (status: string) => void
}
type PathParamsType = {
	userId: string
}
export type ProfilePropsType = mapStateType & mapDispatchType & RouteComponentProps<PathParamsType>

const ProfileContainer = (props: ProfilePropsType) : React.ReactElement => {
	
	useEffect(()=> {
		let userId = props.match.params.userId
		if(!userId) {
			userId = props.authorizedUserId
		}
		props.getUserProfile(userId)
		props.getStatus(userId)
		
	}, [])
	
	return (
		<Profile {...props}
				 // isOwner={!this.props.match.params.userId}
				 // savePhoto={this.props.savePhoto}
				 profile={props.profile}
				 status={props.status}
				 updateStatus={props.updateStatus} />
	);
};


const mapState = (state: AppStateType) => ({
	profile: state.profilePage.profile,
	posts: state.profilePage.posts,
	status: state.profilePage.status,
	authorizedUserId: state.auth.id,
	isAuth: state.auth.isAuth
})

export default compose<React.FC>(
	connect(mapState, {getUserProfile, getStatus, updateStatus}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
