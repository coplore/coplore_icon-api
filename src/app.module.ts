import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IconsModule } from './icons/icons.module';

@Module({
	imports: [IconsModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
