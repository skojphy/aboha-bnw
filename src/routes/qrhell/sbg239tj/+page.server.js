import { error } from '@sveltejs/kit';
import { qr } from '$db/qr';

export function load() {
	const code = {
		no: 6,
		id: 'sbg239tj',
		url: 'success6',
		status: 'success'
	};

	if (!code) throw error(404);

	return {
		code
	};
}

export const actions = {
	submitForm: async ({ request }) => {
		const values = await request.formData();

		const getFormValues = (key) => values.get(key);

		const submitData = {
			name: getFormValues('name'),
			no: getFormValues('no'),
			timeStamp: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
		};

		await qr.insertOne(submitData);

		return { success: true };
	}
};
