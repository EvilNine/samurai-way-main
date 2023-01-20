import React, {useEffect} from 'react';
import {Row, Main } from '../../ui/layout';
import  {PropsType} from "./UsersContainer";
import User from './User';
import Loader from '../../ui/modules/Loader';


//import Pagination from "../../ui/modules/Pagination";

type UsersPropsType = PropsType

const Users: React.FC<UsersPropsType> = (
	props) => {
	//console.log(props)
	const {
		usersPage,
		follow,
		unfollow,
		toggleFollowingProgress,
		getUsers,
		// setUsers,
		// setCurrentPage,
		// setTotalUsersCount,
		// setFetching,
		
	} = {...props}
	useEffect(()=> {
		getUsers(usersPage.currentPage, usersPage.pageSize)
		// return () => {
		// 	setUsers([])
		// }
		
	}, [])
	
	
	const onPageChanged = (currentPage: number) => {
		getUsers(currentPage, usersPage.pageSize)
	}
	
	
	let pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize);
	let pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<Main blank>
			
			<div style={{position:'relative',overflow:'hidden'}}>
				{
					pages.map(i => <span key={i} onClick={ ()=>onPageChanged(i) }>{i}</span>)
				}
			</div>
			{usersPage.isFetching && <Loader center={true} /> }
			{/*<Pagination pageSize={usersPage.pageSize}*/}
			{/*			currentPage={usersPage.currentPage}*/}
			{/*			totalItemsCount={usersPage.totalUsersCount}*/}
			{/*			onPageChanged={onPageChanged} />*/}
			<Row>
				{
					!usersPage.isFetching && usersPage.users.map(user =>
						<User key={user.id}
							  user={user}
							  follow={follow}
							  unfollow={unfollow}
							  toggleFollowingProgress={toggleFollowingProgress}
							  followingInProgress={usersPage.followingInProgress}/>
					)
				}
			</Row>
		</Main>
	);
};

export default Users;