import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	sidebar: sidebarReducer,
	auth: authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

// @ts-ignore
window.__store__ = store

export default store;