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
	toggleFollowingProgress,
} from "../../redux/usersReducer";
import { UserType } from '../../types';

type mapStateType  = {
	usersPage: UsersInitianalStateType
}

type mapDispatchType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: Array<UserType>) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (count: number) => void
	setFetching: (fetching: boolean) => void
	toggleFollowingProgress: (fetching: boolean, userId: number) => void
}

export type PropsType = mapStateType & mapDispatchType

const mapState = (state: mapStateType) => {
	return  { usersPage: state.usersPage}
}

const UsersContainer = connect(mapState, {
	setUsers,
	follow,
	unfollow,
	setCurrentPage,
	setTotalUsersCount,
	setFetching,
	toggleFollowingProgress
	
})(Users)

export default UsersContainer;