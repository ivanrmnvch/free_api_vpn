import { Controller, Post, Body } from '@nestjs/common';
import XrayManagerService from './xrayManager.service';
import XrayClientQueryDto from './dto/xrayClientQuery.dto';
import RestartDto from './dto/restart.dto';

@Controller('xray-manager')
export default class XrayManagerController {
	constructor(private xrayManagerService: XrayManagerService) {}

	@Post('/client')
	async addClient(@Body() body: XrayClientQueryDto) {
		return this.xrayManagerService.addClient(body);
	}

	@Post('/restart')
	async restart(@Body() body: RestartDto) {
		console.log('body', body);
		return this.xrayManagerService.restart(body);
	}
}
