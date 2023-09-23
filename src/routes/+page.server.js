import { database } from '$db/database';

export const load = async function () {
	console.log('>>>> start');
	const data = await database
		.find(
			{},
			{
				projection: {
					_id: String,
					title: String,
					state: Number
				}
			}
		)
		.toArray();

	data.forEach((item) => {
		console.log('>>>> title : ' + item.title);
		if (item.title.length > 14) {
			item.length = item.title.length * 0.7;
		} else {
			item.length = item.title.length * 0.8;
		}
	});

	const loadData = JSON.parse(JSON.stringify(data));
	return {
		database: loadData
	};
};
