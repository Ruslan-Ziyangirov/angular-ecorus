export interface User {
	id: string,
	photo_url?: string,
	firstname?: string,
	lastname?: string,
	username?: string,
	email: string,
	phone_number: string,
	password: string,
	balance?: number,
	role?: string
}
