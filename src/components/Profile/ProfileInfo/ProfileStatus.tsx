import React from 'react';
import {Status} from "./ProfileInfo.styled";
import EditableSpan from "../../../ui/modules/EditableSpan";

type ProfileStatusType = {
	status:  string
	updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<ProfileStatusType> = ({status, updateStatus}) => {
	const onStatusChangeHandler = (status: string) => {
		updateStatus(status)
	}
	return (
		<Status>
			<EditableSpan title={status}
						  callBack={ onStatusChangeHandler }
						  justifyContent={'space-between'} />
		</Status>
	);
};

export default ProfileStatus;