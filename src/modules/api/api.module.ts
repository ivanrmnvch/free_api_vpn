import { Module } from '@nestjs/common';

import ApiProviders from './api.providers';

@Module({
	exports: [...ApiProviders],
	providers: [...ApiProviders],
})
export default class ApiModule {}
