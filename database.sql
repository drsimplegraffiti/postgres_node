CREATE DATABASE leaderboard;


-- To login to postgres
--psql -U postgres

--connect to database
--\c leaderboard

-- create table
CREATE TABLE leaderboards (

    board_id SERIAL PRIMARY KEY,
    game VARCHAR(30),
    player VARCHAR(30),
    score INT

);

SELECT * FROM leaderboards;
