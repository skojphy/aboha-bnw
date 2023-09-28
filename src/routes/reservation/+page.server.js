import { database } from '$db/database';

export const load = async function () {
	console.log('>>>> load start');
	const data = await database.find({}).toArray();
	data.forEach((item) => {
		console.log('>>>> name : ' + item.name);
	});
	const loadData = JSON.parse(JSON.stringify(data));
	return {
		database: loadData
	};
};

export const actions = {
	submitForm: async ({ request }) => {
		const values = await request.formData();

		const getFormValues = (key) => values.get(key);

		const submitData = {
			name: getFormValues('name'),
			// phone: getFormValues('phone'),
			// account: getFormValues('account'),
			// arrival: getFormValues('arrival'),
			// leave: getFormValues('leave'),
			// boardgame: getFormValues('boardgame'),
			// message: getFormValues('message')
			test: 'test'
		};

		await database.insertOne(submitData);

		return { success: true };
	}
};
