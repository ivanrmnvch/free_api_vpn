import { PoolConfig } from 'pg';
import * as process from 'node:process';

/**
 * Конфигурация БД postgres
 */
export default (): PoolConfig => {
	console.log('ENV_APP_MODE', process.env.ENV_APP_MODE);
	return process.env.ENV_APP_MODE === 'production'
		? {
				host: process.env.POSTGRES_HOST,
				user: process.env.POSTGRES_USER,
				port: +process.env.POSTGRES_PORT || 5432,
				password: process.env.POSTGRES_PASSWORD,
				min: +process.env.POSTGRES_POOL_MIN || 0,
				max: +process.env.POSTGRES_POOL_MAX || 4,
				statement_timeout: +process.env.POSTGRES_STATEMENT_TIMEOUT || 30000,
				database: process.env.POSTGRES_DB,
			}
		: {
				host: process.env.POSTGRES_DEV_HOST,
				user: process.env.POSTGRES_DEV_USER,
				port: +process.env.POSTGRES_DEV_PORT || 5432,
				password: process.env.POSTGRES_DEV_PASSWORD,
				min: +process.env.POSTGRES_DEV_POOL_MIN || 0,
				max: +process.env.POSTGRES_DEV_POOL_MAX || 4,
				statement_timeout: +process.env.POSTGRES_DEV_STATEMENT_TIMEOUT || 30000,
				database: process.env.POSTGRES_DEV_DB,
			};
};
