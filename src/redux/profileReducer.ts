import {PostType, ProfileType} from "../types";
import {profileApi} from "../api/profileApi";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: 'yo', likesCount: 12},
		{id: 3, message: 'It\'s my first post', likesCount: 12},
		{id: 4, message: 'hi', likesCount: 12},
		{id: 5, message: 'hi', likesCount: 12}
	] as Array<PostType>,
	profile: null as ProfileType | null,
	postText: '' as string,
	status: '' as string
}

export type ProfileInitianalStateType = typeof initialState

export type ProfileReducerACType = AddPostType
									| ChangeNewTextType
									| SetUserProfileType
									| SetStatusType

const profileReducer = (state = initialState, action: ProfileReducerACType): ProfileInitianalStateType => {
	
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [{ id: new Date().getTime(), message: state.postText, likesCount: 0},...state.posts,],
				postText: ''
			};
		case CHANGE_POST_TEXT:
			return {
				...state,
				postText: action.newText
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		default:
			return state
	}
	
}

export type AddPostType = ReturnType<typeof addPost>
export type ChangeNewTextType = ReturnType<typeof updateNewPostText>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetStatusType = ReturnType<typeof setStatus>

export const addPost = () => ({type: ADD_POST}) as const
export const updateNewPostText = (newText: string) => ({type: CHANGE_POST_TEXT, newText: newText}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const

// TODO fix any
export const getUserProfile = (userId: string): any => (dispatch: any) => {
	profileApi.getProfile(userId).then(res => {
		dispatch(setUserProfile(res.data))
	})
}

export const getStatus = (userId: string): any => (dispatch: any) => {
	profileApi.getStatus(userId).then(res=>{
		dispatch(setStatus(res.data))
	})
}
export const updateStatus = (status: string): any => (dispatch: any) => {
	profileApi.updateStatus(status).then(res=>{
		if (res.data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	})
}

export default profileReducer
