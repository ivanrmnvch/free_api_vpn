import { Module } from '@nestjs/common';

import XrayManagerService from './xrayManager.service';
import XrayManagerController from './xrayManager.controller';

import ApiModule from '../api/api.module';

@Module({
	imports: [ApiModule],
	controllers: [XrayManagerController],
	exports: [XrayManagerService],
	providers: [XrayManagerService],
})
export default class XrayManagerModule {}
