import { Test, TestingModule } from '@nestjs/testing';
import { OauthClientServerController } from './oauth-client-server.controller';

describe('OauthClientServerController', () => {
  let controller: OauthClientServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OauthClientServerController],
    }).compile();

    controller = module.get<OauthClientServerController>(OauthClientServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
