import { Injectable } from '@nestjs/common';
import PostgresService from '../postgres/postgres.service';
import DigisellerDto from './dto/digiseller.dto';

@Injectable()
export default class DigisellerService {
	constructor(
		private pgService: PostgresService,
	) {}

	async newOrder(body: DigisellerDto) {
		console.log("body", body);
		return null;
	}
}
