import { Controller, Post, Body } from '@nestjs/common';
import DigisellerService from './digiseller.service';
import DigisellerDto from './dto/digiseller.dto';

@Controller('digiseller')
export default class DigisellerController {
	constructor(private digisellerService: DigisellerService) {}

	@Post('/')
	async newOrder(@Body() body: DigisellerDto) {
		return this.digisellerService.newOrder(body);
	}
}
