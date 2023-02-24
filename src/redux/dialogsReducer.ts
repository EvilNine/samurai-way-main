import {InferActionsTypes} from "./store";

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
	] as Array<MessageType>
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

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messages: [...state.messages, {id: state.messages.length + 1, message: action.message}]
			}
		default:
			return state
	}
}

export const actions = {
	sendMessage: (message:string) => ({type: SEND_MESSAGE, message} as const),
}
type ActionsType = InferActionsTypes<typeof actions>



export default dialogsReducer