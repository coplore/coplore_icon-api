import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

import { AppModule } from './app.module';

const API_PREFIX = 'api' as const;
const PORT = process.env.PORT || 3065;

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.setGlobalPrefix(API_PREFIX);
	app.useStaticAssets(path.join(__dirname, '..', 'public'));
	app.setViewEngine('html');

	await app.listen(PORT);
	Logger.log(`🚀 Coplore Icon API Server Start: http://localhost:${PORT}/${API_PREFIX}`);
}

bootstrap();
