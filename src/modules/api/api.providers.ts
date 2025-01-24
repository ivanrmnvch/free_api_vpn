import * as provider from '../../const/api';
import Api from '../../utils/api';

/**
 * Провайдер для регистрации IA и возврата объекта методов
 */

export default [
	{
		provide: provider.API_XRAY_MANAGER_LOCAL_PROVIDER,
		useFactory: (): Api => {
			return new Api(process.env.XRAY_MANAGER_LOCAL_URL);
		},
	},
	{
		provide: provider.API_XRAY_MANAGER_NL_01_PROVIDER,
		useFactory: (): Api => {
			return new Api(process.env.XRAY_MANAGER_NL_01_URL);
		},
	},
];
