import { Body, Controller, Post } from '@nestjs/common';
import { LeadsService } from './leads.service';

@Controller('leads')
export class LeadsController {
  constructor(private leadsService: LeadsService) {}

  @Post()
  async createContact(@Body('name') name: string) {
    return {
      name: name,
      type: 'contact',
      cmsResponse: await this.leadsService.createLead(name),
    };
  }
}
