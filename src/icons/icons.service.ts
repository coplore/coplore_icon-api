import { Injectable, StreamableFile } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class IconsService {
	getIcon(symbol: string): StreamableFile {
		let filePath = path.join(__dirname, `../../public/icons/${symbol.toLowerCase()}.png`);
		if (!fs.existsSync(filePath)) {
			filePath = path.join(__dirname, '../../public/icons/_no_image_.png');
		}

		const readStream = fs.createReadStream(filePath);
		const file = new StreamableFile(readStream);

		return file;
	}
}
