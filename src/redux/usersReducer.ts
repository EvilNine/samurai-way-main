import {UserType} from "../types";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'
const SET_FETCHING = 'SET-FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING'

let initialState = {
	users: [] as Array<UserType>,
	pageSize: 12 as number,
	totalUsersCount: 0 as number,
	currentPage: 1 as number,
	isFetching: false as boolean,
	followingInProgress: [] as Array<number>
}

export type UsersInitianalStateType = typeof initialState

type FollowACType = ReturnType<typeof follow>
type UnfollowACType = ReturnType<typeof unfollow>
type SetUserACType = ReturnType<typeof setUsers>
type ToggleFollowACType = ReturnType<typeof toggleFollow>
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type SetFetchingACType = ReturnType<typeof setFetching>
type SetToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

type UserReducerACType = FollowACType
						| UnfollowACType
						| SetUserACType
						| ToggleFollowACType
						| SetCurrentPageACType
						| SetTotalUsersCountACType
						| SetFetchingACType
						| SetToggleFollowingProgressType

const usersReducer = (state = initialState, action: UserReducerACType): UsersInitianalStateType => {
	
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
			}
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
			}
		case SET_USERS:
			return {
				...state,
				users: action.users
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case SET_TOTAL_USERS:
			return {
				...state,
				totalUsersCount: action.count
			}
		case SET_FETCHING:
			return {
				...state,
				isFetching: action.fetching
			}
		case TOGGLE_IS_FOLLOWING:
			return {
				...state,
				followingInProgress: action.fetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}
		default:
			return state
	}
	
}

export const follow = (userId: number) => ({ type: FOLLOW, userId}) as const
export const unfollow = (userId: number) => ({ type: UNFOLLOW, userId }) as const
export const toggleFollow = (userId: number) => ({ type: TOGGLE_FOLLOW, userId}) as const
export const setUsers = ( users: Array<UserType> ) => ({type:SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type:SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (count: number) => ({type: SET_TOTAL_USERS, count}) as const
export const setFetching = (fetching: boolean) => ({type:SET_FETCHING,fetching}) as const
export const toggleFollowingProgress = (fetching: boolean, userId: number) => ({type:TOGGLE_IS_FOLLOWING,fetching,userId}) as const

export default usersReducer
