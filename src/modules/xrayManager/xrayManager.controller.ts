import { Controller, Post, Query } from '@nestjs/common';
import XrayManagerService from './xrayManager.service';
import XrayClientQueryDto from './dto/xrayClientQuery.dto';

@Controller('xray-manager')
export default class XrayManagerController {
	constructor(private xrayManagerService: XrayManagerService) {}

	@Post('/')
	async addClient(@Query() query: XrayClientQueryDto) {
		return this.xrayManagerService.addClient(query);
	}
}
