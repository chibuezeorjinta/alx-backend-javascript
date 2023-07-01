import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
	const action1 = uploadPhoto();
	const action2 = createUser();

	return Promise.all([action1, action2].then((value) => {
		console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
	}))
		.catch(() => { console.log('Signup system offline');})
}