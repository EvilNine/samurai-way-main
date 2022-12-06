
let rerenderEntireTree: any = () => {
	console.log('hi')
}

export type MessageType = {
	id: number
	message: string
}
export type DialogType = {
	id: number
	name: string
}
export type PostType = {
	id: number
	message: string
	likesCount: number
}
export type ProfilePageType = {
	posts: Array<PostType>
	postText: string
}
export type DialogPageType = {
	dialogUser: Array<DialogType>
	messages: Array<MessageType>
}
export type SidebarType = {}
export type RootStateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogPageType
	sidebar: SidebarType
}

export const state: RootStateType = {
	profilePage: {
		posts: [
			{id: 1, message: 'Hi, how are you?', likesCount: 12},
			{id: 2, message: 'yo', likesCount: 12},
			{id: 3, message: 'It\'s my first post', likesCount: 12},
			{id: 4, message: 'hi', likesCount: 12},
			{id: 5, message: 'hi', likesCount: 12}
		],
		postText: ''
	},
	dialogsPage: {
		dialogUser: [
			{id: 1, name: 'Name1'},
			{id: 2, name: 'Name2'},
			{id: 3, name: 'Name3'},
			{id: 4, name: 'Name4'},
			{id: 5, name: 'Name5'}
		],
		messages: [
			{id: 1, message: 'hi'},
			{id: 2, message: 'yo'},
			{id: 3, message: 'how are you'},
			{id: 4, message: 'hi'},
			{id: 5, message: 'hi'}
		]
	},
	sidebar: {}
}


export const addPost = () => {
	
	const newPost: PostType = {
		id: new Date().getTime(),
		message: state.profilePage.postText,
		likesCount: 0
	}
	state.profilePage.posts.push(newPost)
	state.profilePage.postText = ''
	rerenderEntireTree()
}

export const ChangePostText = (newText: string) => {
	state.profilePage.postText = newText
	rerenderEntireTree()
}

export const subscribe = (observer: Function) => {
	rerenderEntireTree = observer
}