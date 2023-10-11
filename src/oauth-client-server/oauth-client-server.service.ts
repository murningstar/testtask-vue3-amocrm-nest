import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';

@Injectable()
export class OauthClientServerService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getCredentials() {
    const headers = { 'X-Client-Id': this.configService.get('X-CLIENT-ID') };
    const response = await this.httpService.axiosRef.get(
      'https://test.gnzs.ru/oauth/get-token.php',
      { headers },
    );
    await this.cacheManager.set('credentials', response.data, 0);
    console.log(response.data);
    return response.data;
  }
}
