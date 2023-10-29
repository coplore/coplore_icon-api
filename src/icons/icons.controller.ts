import { Controller, Get, Param, Res, StreamableFile } from '@nestjs/common';
import { Response } from 'express';

import { IconsService } from './icons.service';

@Controller('icons')
export class IconsController {
	constructor(private readonly iconsService: IconsService) {}

	@Get(':symbol')
	getIcon(@Res({ passthrough: true }) res: Response, @Param('symbol') symbol: string): StreamableFile {
		res.set({
			'Content-Type': 'image/png',
			'Content-disposition': 'inline; filename=' + symbol,
			'Cache-Control': 'max-age=31536000, immutable'
		});

		return this.iconsService.getIcon(symbol);
	}
}
