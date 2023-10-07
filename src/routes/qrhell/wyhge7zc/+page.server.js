import { error } from '@sveltejs/kit';

export function load() {
	const code = {
		no: 16,
		id: 'wyhge7zc',
		url: 'fail2',
		status: 'fail'
	};

	if (!code) throw error(404);

	return {
		code
	};
}
