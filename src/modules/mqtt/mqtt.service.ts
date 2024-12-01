import { Injectable, Inject } from '@nestjs/common';
import { MQTT_CONFIG } from '../../const/mqtt';
import { IClientOptions } from 'mqtt/src/lib/client';
import * as mqtt from 'mqtt';

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

	publishMessage(msg: any) {
		console.log(">>> pub", msg);
		const test = this.client.publish('vpn-client', JSON.stringify(msg));
		console.log("test", test);
	}
}
