import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UsdModule } from './modules/usd/usd.module';

@Module({
  imports: [ConfigModule.forRoot(), UsdModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
