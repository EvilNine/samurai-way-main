import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPost} from "../../../redux/profileReducer";
import {PostType} from "../../../types";
import {AppStateType} from "../../../redux/store";

type MapStatePropsType = {
	posts: Array<PostType>
}
type mapDispatchToProps = {
	addPost: (postText: string) => void
}
export type PropsType = MapStatePropsType & mapDispatchToProps

const mapState = (state: AppStateType) => {
	return {
		posts: state.profilePage.posts
	}
}
const MyPostContainer = connect(mapState, {addPost})(MyPosts)

export default MyPostContainer;