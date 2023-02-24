import {PostType, ProfileType} from "../types";
import {profileApi} from "../api/profileApi";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST';
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
	status: '' as string
}

export type ProfileInitianalStateType = typeof initialState

export type ProfileReducerACType = AddPostType
									| SetUserProfileType
									| SetStatusType

const profileReducer = (state = initialState, action: ProfileReducerACType): ProfileInitianalStateType => {
	
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [{ id: new Date().getTime(), message: action.postText, likesCount: 0},...state.posts,]
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
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetStatusType = ReturnType<typeof setStatus>

export const addPost = (postText:string) => ({type: ADD_POST, postText}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const

// TODO fix any
export const getUserProfile = (userId: string): any => (dispatch: Dispatch) => {
	profileApi.getProfile(userId).then(res => {
		dispatch(setUserProfile(res.data))
	})
}

export const getStatus = (userId: string): any => (dispatch: Dispatch) => {
	profileApi.getStatus(userId).then(res=>{
		dispatch(setStatus(res.data))
	})
}
export const updateStatus = (status: string): any => (dispatch: Dispatch) => {
	profileApi.updateStatus(status).then(res=>{
		if (res.data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	})
}

export default profileReducer
