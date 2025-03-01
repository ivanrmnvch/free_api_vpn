import { Module } from '@nestjs/common';
import { join } from 'path';

import { ConfigModule } from '@nestjs/config';

import PostgresModule from './modules/postgres/postgres.module';
import MqttModule from './modules/mqtt/mqtt.module';

import pgConfig from './config/pg.config';
import mqttConfig from './config/mqtt.config';

import UserModule from './modules/user/user.module';
import QrCodeModule from './modules/qrCode/qrCode.module';
import ServersModule from './modules/servers/servers.module';
import XrayManagerModule from './modules/xrayManager/xrayManager.module';
import DigisellerModule from './modules/digiseller/digiseller.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: join(__dirname, '../.env'),
		}),
		PostgresModule.forRoot(pgConfig()),
		MqttModule.forRoot(mqttConfig()),

		UserModule,
		QrCodeModule,
		ServersModule,
		XrayManagerModule,
		DigisellerModule,
	],
})
export class AppModule {}
