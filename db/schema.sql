-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS dinnerandamovie;
-- Creates the "blogger" database --
CREATE DATABASE dinnerandamovie;

CREATE TABLE History
(
	id int NOT NULL AUTO_INCREMENT,
	dinnerSearchTerm VARCHAR(255),
	movieSearchTerm VARCHAR(255),
	likes INT DEFAULT 0,
	PRIMARY KEY (id)
);