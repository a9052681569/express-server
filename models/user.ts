export interface User {
	name: string;
}

export interface UserCredentials {
	username: string;
	password: string;
}

export interface UserInCollection extends UserCredentials {
	user: User;
}