import { error } from '@sveltejs/kit';
import { codes } from '../qrcodes.js';
import { qr } from '$db/qr';

export function load({ params }) {
	const code = codes.find((code) => code.id === params.id);

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
			timeStamp: new Date().toLocaleString('ko-KR')
		};

		await qr.insertOne(submitData);

		return { success: true };
	}
};
