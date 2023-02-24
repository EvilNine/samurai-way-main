import React, {useCallback} from 'react';
import {Status} from "./ProfileInfo.styled";
import EditableSpan from "../../../ui/modules/EditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {updateStatus} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/store";

const ProfileStatus: React.FC = () => {
	
	const dispatch = useDispatch()
	const statusChangeHandler = useCallback(dispatch((status: string)=>updateStatus(status)), [])
	const status = useSelector((state:AppStateType) => state.profilePage.status)
	
	return (
		<Status>
			
			<EditableSpan title={status}
						  callBack={ statusChangeHandler }
						  justifyContent={'space-between'} />
		</Status>
	);
};

export default ProfileStatus;