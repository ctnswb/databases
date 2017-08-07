CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id integer primary key,
  name text
);

CREATE TABLE users (
  id integer primary key,
  name text
);

CREATE TABLE messages (
  id integer primary key,
  username integer,
  message_body text,
  created_at datetime,
  room integer,
  FOREIGN KEY(username) REFERENCES users(id),
  FOREIGN KEY(room) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

