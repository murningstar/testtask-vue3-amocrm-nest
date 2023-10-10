import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { OauthClientServerController } from './oauth-client-server/oauth-client-server.controller';
import { OauthClientServerService } from './oauth-client-server/oauth-client-server.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot(), CacheModule.register()],
  controllers: [AppController, OauthClientServerController],
  providers: [AppService, OauthClientServerService],
})
export class AppModule {}
