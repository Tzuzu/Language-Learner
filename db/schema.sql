DROP DATABASE IF EXISTS language_db;
CREATE DATABASE language_db;

-- USE language_db;

-- CREATE TABLE user(
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     user_name VARCHAR(50) NOT NULL,
--     user_email VARCHAR(50) NOT NULL,
--     user_password VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE lesson(
--     lesson_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     language_id INT NOT NULL,
--     questions_id INT NOT NULL AUTO AUTO_INCREMENT
--     FOREIGN KEY (language_id) REFERENCES language(id),
--     FOREIGN KEY (questions_id) REFERENCES questions(id)
-- );

-- CREATE TABLE questions(
--     questions_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     lesson_id INT NOT NULL AUTO_INCREMENT,
--     language_id INT NOT NULL,
--     FOREIGN KEY (lesson_id) REFERENCES lesson(id),
--     FOREIGN KEY (language_id) REFERENCES language(id)
-- );

-- CREATE TABLE languages(
--     language_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     language_name VARCHAR(30),
-- );

-- CREATE TABLE reviews(
--     review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     user_name VARCHAR(50),
--     user_email VARCHAR(50),
--     FOREIGN KEY (user_id) REFERENCES user(id),
--     FOREIGN KEY (user_name) REFERENCES user(user_name),
--     FOREIGN KEY (user_email) REFERENCES user(user_email)
-- );
