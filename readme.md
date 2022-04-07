##### Run and interact with database

> psql -U postgres

##### list databases

> /l

##### Connect to leaderboard databases

> \c leaderboard

##### Create table

```
 CREATE TABLE leaderboards (

    board_id SERIAL PRIMARY KEY,
    game VARCHAR(30),
    player VARCHAR(30),
    score INT

);
```

##### Check data in database

` SELECT * FROM leaderboards;`

##### INSERT INTO leaderboards

> INSERT INTO leaderboards(game, player, score) VALUES ('pokemon', 'Tope', 10);
