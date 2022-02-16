import pg from 'pg'; //pg reaches out to database

export const db = new pg.Pool(); //create database variable and access .env file