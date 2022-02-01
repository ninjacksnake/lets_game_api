Lets Game Api

Summary:
This api works to share the game and publishers stored in the database and to .

Techonologies: 
-NestJs 8.2
-typeorm 0.2
-mysql 8.0
-node v14
-typescript 4.3

Run Command: 
npm run start (for production);
npm run start:dev (for development);
npm run test:watch (for tests);

Method/Routes/Descriptions:
 Get: yourHost:port/games  (this will fetch all the games from the database).
 Get: yourHost:port/games/<number>  (this will fetch a game from the database based on the game id).
 Get: yourHost:port/games/<gameName>  (this will bring the game name and the publisher data for this specific game to the database).
 Post: yourHost:port/games (this save a new game in database, data is collected from req.body).
 Patch: yourHost:port/games (this update a  game in database), data is collected from req.body and id comes from the parameters).
 Delete: yourHost:port/games (this delete a game in database, data is collected from req.body and id comes from the parameters).

 Get: yourHost:port/publishers (this will fetch all the publisher data from the database).
 Get: yourHost:port/publishers/<number> (this will fetch a publisher from the database based on the publisher id).
 Post: yourHost:port/publisher (this save a new publisher in database data is collected from req.body).
 Patch: yourHost:port/publishers (this update a publisher in database, data is collected from req.body and id comes from the parameters).
 delete: yourHost:port/publishers (this delete a publisher in database, data is collected from req.body and id comes from the parameters).

 Get: yourHost:port/games/cleanupdate (this will trigger a proccess that clear games older than 18 month from release date and apply a 20% of discount for games from 12 to 18 month old).




