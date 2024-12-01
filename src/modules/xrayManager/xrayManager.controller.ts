import { Controller, Post, Body } from '@nestjs/common';
import XrayManagerService from './xrayManager.service';
import XrayClientQueryDto from './dto/xrayClientQuery.dto';

@Controller('xray-manager')
export default class XrayManagerController {
	constructor(private xrayManagerService: XrayManagerService) {}

	@Post('/client')
	async addClient(@Body() body: XrayClientQueryDto) {
		return this.xrayManagerService.addClient(body);
	}

	@Post('/restart')
	async restart(@Body() body: string) {
		return this.xrayManagerService.restart(body);
	}
}
