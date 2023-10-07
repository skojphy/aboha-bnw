import { qr } from '$db/qr';

export const load = async function () {
	console.log('>>>> load start');
	const data = await qr.find({}).toArray();
	data.forEach((item) => {
		console.log('>>>> title : ' + item.name);
	});
	const loadData = JSON.parse(JSON.stringify(data));
	return {
		qr: loadData
	};
};
