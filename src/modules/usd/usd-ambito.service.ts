import { HttpService, Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import moment from 'moment';

export type USDHistory = [[string, string]];

export enum USDType {
  turista = 'dolarturista',
  informal = 'dolar/informal',
  cl = 'dolarrava/cl',
  oficial = 'dolar/oficial',
  mep = 'dolarrava/mep',
  mayorista = 'dolar/mayorista',
}

@Injectable()
export class UsdAmbitoService {
  @Inject()
  private readonly httpService: HttpService;

  @Inject()
  private readonly configService: ConfigService;

  public getHistory(
    usdType: USDType,
    from: moment.Moment,
    to: moment.Moment,
  ): Promise<USDHistory> {
    const [start, end] = [from.format('DD-MM-YYYY'), to.format('DD-MM-YYYY')];

    return this.httpService
      .get(
        `${this.configService.get(
          'AMBITO_API_URL',
        )}/${usdType}/historico-general/${start}/${end}`,
      )
      .toPromise() as any;
  }
}
