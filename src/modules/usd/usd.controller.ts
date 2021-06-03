import {
  BadRequestException,
  Controller,
  Get,
  Inject,
  Query,
} from '@nestjs/common';
import { UsdAmbitoService, USDHistory, USDType } from './usd-ambito.service';
import * as moment from 'moment';

@Controller('usd')
export class UsdController {
  @Inject()
  private readonly usdAmbitoService: UsdAmbitoService;

  @Get()
  public async getUsdHistory(
    @Query('usd-type') usdType: string,
    @Query('from') from: string,
    @Query('to') to: string,
  ): Promise<USDHistory> {
    if (!from) {
      throw new BadRequestException('The "from" param is not a valid date.');
    }

    if (!to) {
      throw new BadRequestException('The "to" param is not a valid date.');
    }

    if (!usdType) {
      throw new BadRequestException('Missing param "usd-type".');
    }

    if (!USDType[usdType]) {
      throw new BadRequestException(
        `The usd type "${usdType}" does not exist.`,
      );
    }

    const response: any = await this.usdAmbitoService.getHistory(
      USDType.cl,
      moment(new Date(from)),
      moment(new Date(to)),
    );

    return response.data;
  }
}
