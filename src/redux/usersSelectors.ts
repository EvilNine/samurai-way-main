import {AppStateType} from "./store";

export const getUsers = (state: AppStateType) => {
	return state.usersPage.users
}

export const pageSize = (state: AppStateType) => {

}