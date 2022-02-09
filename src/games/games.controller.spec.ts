import { Test, TestingModule } from '@nestjs/testing';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { games } from './entities/game.entity';
import { GamesController } from './games.controller';
import { GamesModule } from './games.module';
import { GamesService } from './games.service';


describe('GamesController', () => {
  let controller: GamesController;

  const fakeGamesService = {
    create: jest.fn(dto => {
      return {
        id: 12345,
        ...dto
      }
    }),
    update: jest.fn(dto => {
      return {
        id: 12345,
        ...dto
      }
    }),
    delete: jest.fn(dto => {
      return {
        id: 12345,
        ...dto
      }
    }),
  }

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      imports: [GamesModule],
      controllers: [GamesController],
      providers: [GamesService],
    })
      .overrideProvider(games)
      .useValue(fakeGamesService)
      .compile();

    controller = module.get<GamesController>(GamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  let mydate = new Date(Date.now());
  it('should create a game', () => {
    expect(controller.create({
      id: Date.now(),
      title: 'test',
      price: 100,
      publisher: {
        id: 1,
        name: 'TestPublisher',
        phone: "55258",
        siret: 25758,
      },
      tags: ['game', 'land', 'crystals', 'flames'],
      releaseDate: mydate,
    })).toEqual({
      id: expect.any(Number),
      title: 'test',
      price: 100,
      publisher: expect.any(Object),
      tags: expect.any(Array),
      releaseDate: expect.any(Date),
    })
  })


  it('should update a game', () => {
    expect(controller.update("100", {
      id: Date.now(),
      title: 'test1',
      price: 101,
      publisher: {
        id: 1,
        name: 'TestPublisher',
        phone: "55258",
        siret: 25758,
      },
      tags: ['game', 'land', 'crystals', 'flames'],
      releaseDate: mydate,
    })).toEqual({
      id: expect.any(Number),
      title: 'test1',
      price: 101,
      publisher: expect.any(Object),
      tags: expect.any(Array),
      releaseDate: expect.any(Date),
    })
  })



});
