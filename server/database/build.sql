BEGIN;

CREATE TABLE voters(
  id INT PRIMARY KEY,
  full_name VARCHAR(60) NOT NULL,
  box_number SMALLINT NOT NULL,
  address VARCHAR(100) NULL,
  serial_box_number INT NOT NULL,
  telephone INT NULL,
  status SMALLINT DEFAULT 1,
  with_against SMALLINT DEFAULT 2
);

CREATE TABLE region(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE users(
  id INT PRIMARY KEY,
  full_name VARCHAR(100) UNIQUE NOT NULL,
  user_name VARCHAR(20) UNIQUE NOT NULL,
  password VARCHAR(20) NOT NULL,
  telephone INT NOT NULL,
  email VARCHAR(50) NULL,
  type VARCHAR(20) NOT NULL CHECK (type = 'B' OR type = 'R' OR type = 'M')
);


CREATE TABLE box(
  id SMALLINT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  user_on_box INT REFERENCES users(id),
  number_of_voters INT NOT NULL,
  region INT REFERENCES region(id)
);

COMMIT;
