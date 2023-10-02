import { database } from '$db/database';

export const load = async function () {
	console.log('>>>> load start');
	const data = await database.find({}).toArray();
	data.forEach((item) => {
		console.log('>>>> title : ' + item.name);
	});
	const loadData = JSON.parse(JSON.stringify(data));
	return {
		database: loadData
	};
};
