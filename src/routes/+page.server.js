// import { database } from '$db/database';
// import { ObjectId } from 'mongodb';

export const load = async function () {
	console.log('>>>> load start');
	// const data = await database
	// 	.find(
	// 		{},
	// 		{
	// 			projection: {
	// 				_id: String,
	// 				title: String,
	// 				state: Number
	// 			}
	// 		}
	// 	)
	// 	.toArray();
	// data.forEach((item) => {
	// 	console.log('>>>> title : ' + item.name);
	// });
	// const loadData = JSON.parse(JSON.stringify(data));
	// return {
	// 	database: loadData
	// };
};

// export const actions = {
// 	editUser: async ({ request }) => {
// 		console.log('>>>> edit start');
// 		const values = await request.formData();

// 		const name = Number.parseInt(values.get('name'));
// 		console.log('name?', name);
// 		const newName = name + '!';

// 		const _id = values.get('id');
// 		console.log('id?', _id);
// 		const objectId = new ObjectId(_id);

// 		await database.updateOne(
// 			{ _id: objectId },
// 			{
// 				$set: {
// 					name: newName
// 				}
// 			}
// 		);

// 		return { success: true };
// 	}
// };

// export const actions = {
// 	default: async ({ request }) => {
// 		// read the form data sent by the browser
// 		const formData = await request.formData();
// 		const name = formData.get('name');
// 		// Perform some backend code/logic action

// 		const _id = formData.get('id');

// 		const objectId = new ObjectId(_id);

// 		await database.updateOne(
// 			{ _id: objectId },
// 			{
// 				$set: {
// 					name: name + '!'
// 				}
// 			}
// 		);

// 		return { success: true };
// 	}
// };
