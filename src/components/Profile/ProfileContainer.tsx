import React, {useEffect} from 'react';
import Profile from './Profile';

import {connect, useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile, ProfileInitianalStateType, updateStatus} from '../../redux/profileReducer';
import {AppStateType} from "../../redux/store";
import {PostType, ProfileType} from "../../types";
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type mapStateType = {
	profile: ProfileType | null
	posts: Array<PostType>
	postText: string
	isAuth: boolean
	status: string
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
	
	// const selectProfile = (state: AppStateType): ProfileInitianalStateType => state.profilePage
	// const selector = useSelector(selectProfile)
	// console.log(selector.profile)
	//
	// const dispatch = useDispatch()
	// const dispatchUpdateStatus = dispatch(updateStatus)
	
	useEffect(()=> {
		let userId = props.match.params.userId
		console.log(props.profile)
		if(!userId) {
			userId = '12174'
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
	postText: state.profilePage.postText,
	status: state.profilePage.status,
	// authorizedUserId: state.auth.userId,
	// isAuth: state.auth.isAuth
})

export default compose<React.FC>(
	connect(mapState, {getUserProfile, getStatus, updateStatus}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
