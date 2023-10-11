import { Body, Controller, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Post()
  async createContact(@Body('name') name: string) {
    return {
      name: name,
      type: 'contact',
      cmsResponse: await this.contactsService.createContact(name),
    };
  }
}
