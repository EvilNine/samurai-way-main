import MyPosts from "./MyPosts";
import {addPostAC, changeNewTextAC, ProfileInitianalStateType} from "../../../redux/profileReducer";

import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
	profilePage: ProfileInitianalStateType
}
type mapDispatchToProps = {
	updateNewPostText: (newText: string) => void
	addPost: () => void
}
export type PropsType = MapStatePropsType & mapDispatchToProps

const mapStateToProps = (state: MapStatePropsType) => {
	return {
		profilePage: state.profilePage
	}
}
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		updateNewPostText: (newText: string) => {
			dispatch(changeNewTextAC(newText))
		},
		addPost: () => {
			dispatch(addPostAC())
		}
	}
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer;