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

##### Heroku deploy

- heroku login
- heroku create [app name]
- git push heroku main

#### Set/Link data base to heroku database

- heroku addons:create heroku-postgresql:hobby-dev

[provision a database for postgresql](https://devcenter.heroku.com/articles/heroku-postgresql)

Then, run:

> heroku pg:psql

##### .env example

```
PORT=
DB_USER=
DB_PASSWORD=
DB_PORT=
HOST=
DB_database=

```
