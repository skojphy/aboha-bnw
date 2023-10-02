import { database } from '$db/database';

export const actions = {
	submitForm: async ({ request }) => {
		const values = await request.formData();

		const getFormValues = (key) => values.get(key);

		const submitData = {
			name: getFormValues('name'),
			phone: getFormValues('phone'),
			account: getFormValues('account'),
			arrival: getFormValues('arrival'),
			leave: getFormValues('leave'),
			boardgame: getFormValues('boardgame'),
			message: getFormValues('message'),
			timeStamp: new Date().toLocaleString('ko-KR')
		};

		await database.insertOne(submitData);

		return { success: true };
	}
};
