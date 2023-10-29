import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IconsModule } from './icons/icons.module';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: path.join(__dirname, '..', 'public'),
			exclude: ['/api*']
		}),
		IconsModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
