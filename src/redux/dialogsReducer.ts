const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogUser: [
		{id: 1, name: 'Name1'},
		{id: 2, name: 'Name2'},
		{id: 3, name: 'Name3'},
		{id: 4, name: 'Name4'},
		{id: 5, name: 'Name5'}
	] as Array<DialogType>,
	messages: [
		{id: 1, message: 'hi'},
		{id: 2, message: 'yo'},
		{id: 3, message: 'how are you'},
		{id: 4, message: 'hi'},
		{id: 5, message: 'hi'}
	] as Array<MessageType>,
	newMessageBody: '' as string
}

export type DialogType = {
	id: number
	name: string
}
export type MessageType = {
	id: number
	message: string
}
export type InitialStateType = typeof initialState
export type UpdateNewMessageACType = ReturnType<typeof updateNewMessageAC>
export type SendMessageACType = ReturnType<typeof sendMessageAC>
export type DialogsReducerACType = UpdateNewMessageACType | SendMessageACType

const dialogsReducer = (state = initialState, action: DialogsReducerACType): InitialStateType => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.message
			}
		case SEND_MESSAGE:
			const body = state.newMessageBody;
			const newId = state.messages.length + 1
			return {
				...state,
				messages: [...state.messages, {id: state.messages.length + 1, message: state.newMessageBody}],
				newMessageBody: ''
			}
		default:
			return state
	}
}

export const updateNewMessageAC = (message: string) => ({type: UPDATE_NEW_MESSAGE_BODY, message}) as const
export const sendMessageAC = () => ({type: SEND_MESSAGE}) as const

export default dialogsReducer