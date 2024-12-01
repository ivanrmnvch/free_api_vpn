import { Injectable, Inject } from '@nestjs/common';
import { MQTT_CONFIG } from '../../const/mqtt';
import { IClientOptions } from 'mqtt/src/lib/client';
import * as mqtt from 'mqtt';
import RestartDto from '../xrayManager/dto/restart.dto';

@Injectable()
export default class MqttService {
	private client: mqtt.MqttClient;

	constructor(@Inject(MQTT_CONFIG) private config: IClientOptions) {
		console.log('mqtt config', config);
		this.client = mqtt.connect(config);

		this.client.on('connect', () => {
			console.log('Connected to MQTT broker');
		});
	}

	async publishMessage(msg: any) {
		this.client.publish('vpn-client', JSON.stringify(msg));

		// try {
		// 	// todo test try catch
		// 	// или .catch(())???
		// 	// await this.client.publishAsync('vpn-client', JSON.stringify(msg));
		//
		// } catch (e) {
		// 	console.error(e);
		// }
	}

	async restart(body: RestartDto) {
		const serverName = body?.serverName;
		if (!serverName) {
			return;
		}

		try {
			const test = this.client.publish(
				'server-restart',
				JSON.stringify(serverName)
			);
			console.log('test2', test);
		} catch (e) {
			console.error(e);
		}

		try {
			const test = await this.client
				.publishAsync('server-restart', JSON.stringify(serverName))
				.then((data) => data)
				.catch((e) => {
					console.log('.catch'); // todo ошибка падает сюда
					console.error(e);
				});
			console.log('>>> test:', test);
		} catch (e) {
			console.log('catch (e)');
			console.error(e);
		}
	}
}
