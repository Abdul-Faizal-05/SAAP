 create database saap_project;

 create table users(
    id bigserial primary key,
    name varchar(30) not null,
    dob date not null,
    email varchar(40) not null unique,
    password varchar(50) not null,
    role varchar(10) not null
    );