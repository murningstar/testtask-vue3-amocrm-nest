import { Controller, Get  } from '@nestjs/common';
import { OauthClientServerService } from './oauth-client-server.service';

@Controller('oauth-client-server')
export class OauthClientServerController {
    constructor(private authorizer: OauthClientServerService) {}

    @Get()
    async authorize() {
        const credentials = await this.authorizer.getCredentials()
        return credentials
    }
    
}
