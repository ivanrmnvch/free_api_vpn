import { Injectable } from '@nestjs/common';
import PostgresService from '../postgres/postgres.service';
import MqttService from '../mqtt/mqtt.service';
import XrayClientQueryDto from './dto/xrayClientQuery.dto';
import RestartDto from './dto/restart.dto';

@Injectable()
export default class XrayManagerService {
	constructor(
		private pgService: PostgresService,
		private mqttService: MqttService
	) {}

	async addClient(query: XrayClientQueryDto) {
		const { id } = query;

		const [{ clientId }] = await this.pgService.query<{ clientId: number }>(
			'SELECT client_id as "clientId" FROM tg_users_meta WHERE id = $1::bigint;',
			[id]
		);

		this.mqttService.publishMessage({ id, clientId });

		return null;
	}

	/**
	 * Метод перезагрузки VPN сервера
	 * @param {string} body Название перезагружаемого сервера
	 */
	async restart(body: RestartDto) {
		await this.mqttService.restart(body);
	}
}
