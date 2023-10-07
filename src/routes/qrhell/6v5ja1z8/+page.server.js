import { error } from '@sveltejs/kit';

export function load() {
	const code = {
		no: 19,
		id: '6v5ja1z8',
		url: 'fail5',
		status: 'fail'
	};

	if (!code) throw error(404);

	return {
		code
	};
}
