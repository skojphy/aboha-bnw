import { error } from '@sveltejs/kit';

export function load() {
	const code = {
		no: 17,
		id: '3xdhshpp',
		url: 'fail3',
		status: 'fail'
	};

	if (!code) throw error(404);

	return {
		code
	};
}
