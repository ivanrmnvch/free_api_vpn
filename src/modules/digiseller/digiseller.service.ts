import { Injectable } from '@nestjs/common';
import PostgresService from '../postgres/postgres.service';
import DigisellerDto from './dto/digiseller.dto';

@Injectable()
export default class DigisellerService {
	constructor(
		private pgService: PostgresService,
	) {}

	async newOrder(body: DigisellerDto) {
		console.log("body", body);

		// todo смотреть таблицу заказов по inv
		//const test = await this.pgService.query('SELECT * FROM digiseller_')

		const [{ id, user_data }] = body.options;

		const [{ key, value }] = await this.pgService.query<{key: string, value: string}>(`
			SELECT dp.name as key, dpv.name as value
			FROM digiseller_parameters as dp
				JOIN digiseller_parameter_values as dpv ON dpv.parameter_id = dp.id
			WHERE dp.id = $1::integer AND dpv.id = $2::integer;
		`,
			[id, user_data],
		)

		// todo
		// switch(key) {
		// 	case 'Tariff':
		// }

		if (value === '1 day') {

		}

		// 	1 day
		// 3 months
		// 6 months
		// 1 year




		// return {
		// 	"id":"",
		// 	"inv": (int),
		// 	"goods": (string),
		// 	error: null,
		// };
	}
}
