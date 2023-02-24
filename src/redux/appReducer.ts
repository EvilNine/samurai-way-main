import {Dispatch} from "redux";
import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'

let initialState = {
	initialized: false
};
export type InitialStateType = typeof initialState
type InitActionType = ReturnType<typeof initSuccess>
type AppReducerActionsType = InitActionType

const appReducer = (state = initialState, action: AppReducerActionsType): InitialStateType => {
	switch (action.type) {
		case SET_INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		default:
			return state
	}
}

export const initSuccess = () => ({type: SET_INITIALIZED_SUCCESS}) as const


export const initThunk = () => (dispatch: Dispatch) => {
	const promise = dispatch(getAuthUserData())
	promise.then(()=>{
		dispatch(initSuccess())
	})
	
}


export default appReducer;