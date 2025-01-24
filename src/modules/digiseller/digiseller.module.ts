import { Module } from '@nestjs/common';

import DigisellerService from './digiseller.service';
import DigisellerController from './digiseller.controller';

@Module({
	controllers: [DigisellerController],
	exports: [DigisellerService],
	providers: [DigisellerService],
})
export default class DigisellerModule {}
