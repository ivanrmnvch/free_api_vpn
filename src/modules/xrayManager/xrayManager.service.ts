import { Injectable, Inject } from '@nestjs/common';
import PostgresService from '../postgres/postgres.service';
import XrayClientQueryDto from './dto/xrayClientQuery.dto';

import Api from '../../utils/api';
import { API_XRAY_MANAGER_LOCAL_PROVIDER } from '../../const/api';

@Injectable()
export default class XrayManagerService {
	constructor(
		private pgService: PostgresService,
		@Inject(API_XRAY_MANAGER_LOCAL_PROVIDER) private xrayManagerLocalApi: Api
	) {}

	async addClient(query: XrayClientQueryDto) {
		const { id, server } = query;
		// const [{ ip }] = await this.pgService.query<{ ip: string }>(
		// 	'SELECT ip FROM servers WHERE name = $1::varchar;',
		// 	[server]
		// );

		const [{ clientId }] = await this.pgService.query<{ clientId: number }>(
			'SELECT client_id as "clientId" FROM tg_users_meta WHERE id = $1::bigint;',
			[id]
		);

		const test = await this.xrayManagerLocalApi.post('', {
			id,
			clientId,
		});

		return null;
	}
}
