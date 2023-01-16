import React, {useEffect} from 'react';
import Profile from './Profile';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from '../../redux/profileReducer';
import {AppStateType} from "../../redux/store";
import {PostType, ProfileType} from "../../types";
import {RouteComponentProps, withRouter} from "react-router-dom";
import { compose } from 'redux';


type mapStateType = {
	profile: ProfileType | null
	posts: Array<PostType>
	postText: string
}
type mapDispatchType = {
	setUserProfile: (profile: ProfileType) => void
}
type PathParamsType = {
	userId: string
}
export type ProfilePropsType = mapStateType & mapDispatchType & RouteComponentProps<PathParamsType>

const ProfileContainer = (props: ProfilePropsType) => {
	
	useEffect(()=> {
		
		let userId = props.match.params.userId
		
		if(!userId) {
			userId = '2'
		}
		
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
			props.setUserProfile(res.data)
		})
	}, [])

	return (
		<Profile {...props}/>
	);
};

const mapState = (state: AppStateType) => ({
	profile: state.profilePage.profile,
	posts: state.profilePage.posts,
	postText: state.profilePage.postText
	// status: state.profilePage.status,
	// authorizedUserId: state.auth.userId,
	// isAuth: state.auth.isAuth
})

const profileDataComponent = withRouter(ProfileContainer)

export default connect(mapState, {setUserProfile})(profileDataComponent)

// export default compose<React.ComponentType>(
// 	connect(mapState, {setUserProfile}),
// 	withRouter
// )(ProfileContainer);