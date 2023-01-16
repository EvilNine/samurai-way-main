import axios from "axios";
import {UserType} from "../types";

export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "c8720870-5deb-4fdb-b61b-303940b18eac"
	}
});

export enum ResultCodesEnum {
	Success = 0,
	Error = 1
}

export enum ResultCodeForCapcthaEnum {
	CaptchaIsRequired = 10
}

export type GetItemsType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
	data: D
	messages: Array<string>
	resultCode: RC
}