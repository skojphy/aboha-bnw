import { error } from '@sveltejs/kit';

export function load() {
	const code = {
		no: 15,
		id: 'o9zaqg43',
		url: 'fail1',
		status: 'fail'
	};

	if (!code) throw error(404);

	return {
		code
	};
}
