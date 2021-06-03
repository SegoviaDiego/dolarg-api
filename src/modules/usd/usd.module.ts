import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsdAmbitoService } from './usd-ambito.service';
import { UsdController } from './usd.controller';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [UsdController],
  providers: [UsdAmbitoService],
})
export class UsdModule {}
