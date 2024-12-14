export default class DigisellerDto {
	id: number;
	inv: number;
	amount: number;
	type_curr: string;
	sign: string;
	options: Array<{
		id: number;
		user_data: number|string;
	}>;
}
