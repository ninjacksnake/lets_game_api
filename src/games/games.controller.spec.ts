import { Test, TestingModule } from '@nestjs/testing';
import { CreateGameDto } from './dto/create-game.dto';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';

describe('GamesController', () => {
  let controller: GamesController;
  
  const mockGameService = {
    create: jest.fn(()=>{
      return {
        id: 1,
        title: "Mike",
        price: 150,
        publisherId: 1,
        releaseDate: new Date('1/1/2020'),
        tags: "Rpg, Dragons, Magic",
      }
    }),

    update: jest.fn(()=>{
    return  {  
      id: 1,
      title: "Mike",
      price: 150,
      publisherId: 1,
      releaseDate: new Date('1/1/2020'),
      tags: "Rpg, Dragons, Magic",
    }
    })


  };
  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamesController],
      providers: [GamesService],
    })
      .overrideProvider(GamesService)
      .useValue(mockGameService)
      .compile();

    controller = module.get<GamesController>(GamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  let testGame: CreateGameDto = {
    id: 1,
    title: "Mike",
    price: 150,
    publisherId: 1,
    releaseDate: new Date('1/1/2020'),
    tags: "Rpg, Dragons, Magic",
  }

  it('should create a game ', () => {
    expect(controller.create(testGame)).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      price: expect.any(Number),
      publisherId: expect.any(Number),
      releaseDate: expect.any(Date),
      tags: expect.any(String),
    });
  });

  it('should update a game', ()=>{
    let dto = new CreateGameDto()
    expect(controller.update('1', dto)).toEqual({
      id: 1,
      ...dto,
    })
  })


});
