import React, {useCallback, useEffect} from 'react';
import {Row, Main } from '../../ui/layout';
//import  {PropsType} from "./UsersContainer";
import User from './User';
import Loader from '../../ui/modules/Loader';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {follow, getUsers, unfollow } from '../../redux/usersReducer';

//import Pagination from "../../ui/modules/Pagination";

//type UsersPropsType = PropsType

const Users: React.FC = () => {
	
	const users = useSelector((state:AppStateType) => state.usersPage.users)
	const isFetching = useSelector((state:AppStateType) => state.usersPage.isFetching)
	const pageSize = useSelector((state:AppStateType) => state.usersPage.pageSize)
	const totalUsersCount = useSelector((state:AppStateType) => state.usersPage.totalUsersCount)
	const currentPage = useSelector((state:AppStateType) => state.usersPage.currentPage)
	const followingInProgress = useSelector((state:AppStateType) => state.usersPage.followingInProgress)
	
	const dispatch = useDispatch()
	//const getUsersCallback = useCallback( () => dispatch(getUsers(currentPage, pageSize)),[])
	const followHandler = useCallback((userId: number)=> dispatch(follow(userId)), [])
	const unfollowHandler = useCallback((userId: number)=> dispatch(unfollow(userId)), [])
	
	
	useEffect(()=> {
		dispatch(getUsers(currentPage, pageSize))
	}, [])
	
	
	const onPageChanged = (currentPage: number) => {
		getUsers(currentPage, pageSize)
	}
	
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<Main blank>
			{isFetching && <Loader center={true} /> }
			
			{
				!isFetching &&
                <div style={{position:'relative',overflow:'hidden'}}>
					{
						pages.map(i => <span key={i} onClick={ ()=>onPageChanged(i) }>{i}</span>)
					}
                </div>
			}
			
			
			{/*<Pagination pageSize={usersPage.pageSize}*/}
			{/*			currentPage={usersPage.currentPage}*/}
			{/*			totalItemsCount={usersPage.totalUsersCount}*/}
			{/*			onPageChanged={onPageChanged} />*/}
			<Row>
				{
					!isFetching && users.map(user =>
						<User key={user.id}
							  user={user}
							  follow={followHandler}
							  unfollow={unfollowHandler}
							  //toggleFollowingProgress={toggleFollowingProgress}
							  followingInProgress={followingInProgress}/>
					)
				}
			</Row>
		</Main>
	);
};

export default Users;