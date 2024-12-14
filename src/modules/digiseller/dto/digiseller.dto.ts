export default class DigisellerDto {
	id: string;
	inv: string;
	amount: string;
	type_curr: 'WMZ'| 'WMR' | 'WME'| 'WMU';
	sign: string;
	options: Array<{
		id: string;
		type: string;
		user_data: string;
	}>;
	lang: string;
}
