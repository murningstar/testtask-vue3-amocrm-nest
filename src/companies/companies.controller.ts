import { Body, Controller, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @Post()
  async createContact(@Body('name') name: string) {
    return {
      name: name,
      type: 'contact',
      cmsResponse: await this.companiesService.createCompany(name),
    };
  }
}
