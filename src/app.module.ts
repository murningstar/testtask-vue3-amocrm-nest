import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { OauthClientServerController } from './oauth-client-server/oauth-client-server.controller';
import { OauthClientServerService } from './oauth-client-server/oauth-client-server.service';
import { LeadsController } from './leads/leads.controller';
import { LeadsService } from './leads/leads.service';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';
import { CompaniesController } from './companies/companies.controller';
import { CompaniesService } from './companies/companies.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot(), CacheModule.register()],
  controllers: [AppController, OauthClientServerController, LeadsController, ContactsController, CompaniesController],
  providers: [AppService, OauthClientServerService, LeadsService, ContactsService, CompaniesService],
})
export class AppModule {}
