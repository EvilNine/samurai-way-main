import {connect} from "react-redux";
import {Dispatch} from "redux";
import MyPosts from "./MyPosts";
import {
	addPost,
	updateNewPostText
} from "../../../redux/profileReducer";
import {PostType} from "../../../types";
import {AppStateType} from "../../../redux/store";

type MapStatePropsType = {
	posts: Array<PostType>
	postText: string
}
type mapDispatchToProps = {
	updateNewPostText: (newText: string) => void
	addPost: () => void
}
export type PropsType = MapStatePropsType & mapDispatchToProps

const mapState = (state: AppStateType) => {
	return {
		posts: state.profilePage.posts,
		postText: state.profilePage.postText
	}
}


const MyPostContainer = connect(mapState, {updateNewPostText,addPost})(MyPosts)

export default MyPostContainer;