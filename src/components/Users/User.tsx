import React from 'react';
import {UserBody, UserFooter, UserImg, UserItem, UserItemContainer, UserName} from "./Users.styled";
import {Button} from "../../ui/form/Button";
import {Col} from "../../ui/layout";
import {UserType} from "../../types";
import blankImg  from '../../img/avatarMan.png'
import Avatar from '../../ui/modules/Avatar';
import {usersAPI} from "../../api/usersApi";
import {instance} from "../../api/api";

type PropsType = {
	user: UserType
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	followingInProgress: Array<number>
	toggleFollowingProgress: (fetching: boolean, userId: number) => void
}

const User: React.FC<PropsType> = ({user, follow,unfollow, followingInProgress, toggleFollowingProgress}) => {
	
	const followHandler = ()=> {
		toggleFollowingProgress(true, user.id)
		usersAPI.unfollow(user.id).then(res => {
			unfollow(user.id)
			toggleFollowingProgress(false, user.id)
		})
	}
	const unfollowHandler = ()=> {
		toggleFollowingProgress(true, user.id)
		usersAPI.follow(user.id).then(res => {
			follow(user.id)
			toggleFollowingProgress(false, user.id)
		})
	}
	
	return (
		<Col xs={6} md={4} lg={3}>
			<UserItemContainer>
				<UserItem>
					<UserBody>
						<UserImg to={`/profile/${user.id}`}>
							<Avatar src={user.photos.small}/>
						</UserImg>
						<UserName>
							{user.name}
						</UserName>
						<div>
							{user.status}
						</div>
					</UserBody>
					<UserFooter>
						{
							user.followed
								? <Button disabled={followingInProgress.some(id=>id===user.id)} onClick={followHandler} fullWidth={true}>Unfollow</Button>
								: <Button disabled={followingInProgress.some(id=>id===user.id)} onClick={unfollowHandler} fullWidth={true}>Follow</Button>
						}
					</UserFooter>
				</UserItem>
			</UserItemContainer>
		</Col>
	);
};

export default User;