import { error } from '@sveltejs/kit';
import { codes } from '../qrcodes.js';

export function load({ params }) {
	const code = codes.find((code) => code.id === params.id);

	if (!code) throw error(404);

	return {
		code
	};
}
