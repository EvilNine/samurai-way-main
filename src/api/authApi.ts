import { instance } from "./api";

export const authApi = {
	me(){
		return instance.get('/auth/me')
	},
	login(email: string, password: string, rememberMe= false){
		return instance.post('/auth/login', {email, password, rememberMe})
	},
	logout(){
		return instance.delete('/auth/login')
	}
}
