import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import process from 'node:process';

// todo вынести try catch в глобальный фильтр исключений

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		logger: ['error', 'warn'],
	});
	app.setGlobalPrefix('api');
	console.log('MODE', process.env.ENV_APP_MODE === 'production');
	console.log('port', process.env.PORT);
	console.log('port dev', process.env.PORT_DEV);
	await app.listen(+process.env.PORT || 8082);
	// await app.listen(
	// 	process.env.ENV_APP_MODE === 'production'
	// 		? +process.env.PORT || 8082
	// 		: +process.env.PORT_DEV || 8083
	// );
}
bootstrap();
