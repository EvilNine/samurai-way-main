import { instance } from "./api";

export const profileApi = {
	getProfile (userId: string) {
		return instance.get(`profile/${userId}`)
	},
	getStatus(userId: string) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(message:string) {
		return instance.put(`profile/status`, { status: message })
	}
}