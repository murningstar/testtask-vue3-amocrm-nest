import { Test, TestingModule } from '@nestjs/testing';
import { OauthClientServerService } from './oauth-client-server.service';

describe('OauthClientServerService', () => {
  let service: OauthClientServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OauthClientServerService],
    }).compile();

    service = module.get<OauthClientServerService>(OauthClientServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
