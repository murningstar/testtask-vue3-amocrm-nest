import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CompaniesService {
  constructor(
    private httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async createCompany(name: string) {
    const credentials = await this.cacheManager.get<{
      base_domain: string;
      access_token: string;
    }>('credentials');
    console.log(credentials);
    try {
      const response = await this.httpService.axiosRef.post(
        `https://${credentials.base_domain}/api/v4/companies`,
        [{ name: name }],
        {
          headers: {
            Authorization: `Bearer ${credentials.access_token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new HttpException('error', 400);
    }
  }
}
