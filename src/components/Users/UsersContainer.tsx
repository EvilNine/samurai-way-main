import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";

import {
	setCurrentPage,
	setFetching,
	setTotalUsersCount,
	setUsers,
	follow,
	unfollow,
	UsersInitianalStateType,
	toggleFollowingProgress, getUsers,
} from "../../redux/usersReducer";
import { UserType } from '../../types';

const UsersContainer = () => {
	
	return <Users />
}

export default  UsersContainer;
// type mapStateType  = {
// 	usersPage: UsersInitianalStateType
// }
//
// type mapDispatchType = {
// 	follow: (userId: number) => void
// 	unfollow: (userId: number) => void
// 	setUsers: (users: Array<UserType>) => void
// 	setCurrentPage: (currentPage: number) => void
// 	setTotalUsersCount: (count: number) => void
// 	setFetching: (fetching: boolean) => void
// 	toggleFollowingProgress: (fetching: boolean, userId: number) => void
// 	getUsers: (currentPage: number, pageSize: number) => void
// }
//
// export type PropsType = mapStateType & mapDispatchType
//
// const mapState = (state: mapStateType) => {
// 	return  { usersPage: state.usersPage}
// }
//
// export default connect(mapState, {
// 	setUsers,
// 	follow,
// 	unfollow,
// 	setCurrentPage,
// 	setTotalUsersCount,
// 	setFetching,
// 	toggleFollowingProgress,
// 	getUsers
// })(Users)


