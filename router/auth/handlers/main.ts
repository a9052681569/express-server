import { Router } from 'express';
import { Collection } from 'mongodb';
import { User, UserCredentials, UserInCollection } from '../../../models/user';

export const authMain = Router();
	
authMain.post('/main', (req, res) => {
	const users: Collection<UserInCollection> = req.app.locals.users;

	const user: UserCredentials = req.body;
	
	users.findOne(user)
		.then((user: UserInCollection) => {
			
			if (user) {
				res.send(user.user);
			} else {
				res.sendStatus(504);
			}
			
		})
		.catch(err => {
			console.log('ошибка логина');
		})

})