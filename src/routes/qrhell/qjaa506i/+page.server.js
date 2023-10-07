import { error } from '@sveltejs/kit';

export function load() {
	const code = {
		no: 18,
		id: 'qjaa506i',
		url: 'fail4',
		status: 'fail'
	};

	if (!code) throw error(404);

	return {
		code
	};
}
