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

		await this.client
			.publishAsync('server-restart', JSON.stringify(serverName))
			.catch((e) => {
				console.error(e);
			});
	}
}
