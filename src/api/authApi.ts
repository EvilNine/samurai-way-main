import { instance } from "./api";

export const authApi = {
	me(){
		return instance.get('auth/me')
	}
}