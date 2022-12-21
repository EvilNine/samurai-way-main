const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'

type PostType = {
	id: number
	message: string
	likesCount: number
}

let initialState = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: 'yo', likesCount: 12},
		{id: 3, message: 'It\'s my first post', likesCount: 12},
		{id: 4, message: 'hi', likesCount: 12},
		{id: 5, message: 'hi', likesCount: 12}
	] as Array<PostType>,
	postText: '' as string
}

export type ProfileInitianalStateType = typeof initialState

export type ProfileReducerACType = AddPostACType | ChangeNewTextACType

const profileReducer = (state = initialState, action: ProfileReducerACType): ProfileInitianalStateType => {
	
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, { id: new Date().getTime(), message: state.postText, likesCount: 0}],
				postText: ''
			};
		case CHANGE_POST_TEXT:
			return {
				...state,
				postText: action.newText
			};
		default:
			return state
	}
	
}

export type AddPostACType = ReturnType<typeof addPostAC>
export type ChangeNewTextACType = ReturnType<typeof changeNewTextAC>

export const addPostAC = () => {
	return {type: ADD_POST} as const
}
export const changeNewTextAC = (newText: string) => {
	return {type: CHANGE_POST_TEXT, newText: newText} as const
}


export default profileReducer
