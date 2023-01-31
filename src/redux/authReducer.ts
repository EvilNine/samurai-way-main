import {authApi} from "../api/authApi";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET-USER-DATA'
const SET_FETCHING = 'SET-FETCHING'

let initialState = {
	id: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false as boolean,
	captchaUrl: null as string | null// if null, then captcha is not required
};

export type InitialStateType = typeof initialState
type SetFetchingActionType = ReturnType<typeof setFetching>
type SetUserDataActionType = ReturnType<typeof setAuthUserData>
type AuthReducerACType = SetFetchingActionType | SetUserDataActionType

const authReducer = (state = initialState, action: AuthReducerACType): InitialStateType => {
	switch (action.type) {
		case SET_USER_DATA:
			
			return {
				...state,
				...action.payload,
				isAuth: true
			}
		default:
			return state
	}
}

export const setAuthUserData = (payload: {id: number | null, login: string | null, email: string | null }) => (
	{
		type:SET_USER_DATA,
		payload
	}) as const

export const setFetching = (fetching: boolean) => ({type:SET_FETCHING,fetching}) as const

export const getAuthUserData = ():any => (dispatch: Dispatch) => {
	authApi.me().then(res => {
		if( res.data.resultCode === 0 ) {
			dispatch(setAuthUserData(res.data.data))
		}
	})
}


export default authReducer;