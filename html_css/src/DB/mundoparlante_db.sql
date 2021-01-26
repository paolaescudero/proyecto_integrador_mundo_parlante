-- / Creación de la DB
CREATE DATABASE mundoparlante_db;
USE mundoparlante_db;

-- / Creación de las tablas que NO tienen FK
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL DEFAULT 'no-image.png',
  `role` varchar(255) DEFAULT,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- / Creación de las tablas que tienen FK
CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `image` varchar(255) NULL DEFAULT 'no-image.png',
  `brand_id` int(10) unsigned DEFAULT NULL,
  `model` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `product_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `comment` varchar(500) NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- / Populando las tablas
INSERT INTO `brands` VALUES 
	(DEFAULT, 'Genelec', NULL, NULL),
	(DEFAULT, 'Rock It', NULL, NULL),
	(DEFAULT, 'KRK Systems', NULL, NULL),
	(DEFAULT, 'ATC', NULL, NULL),
	(DEFAULT, 'JBL', NULL, NULL);

INSERT INTO `users` VALUES 
	(DEFAULT, 'Pao', 'Escudero', 'paolaescudero@gmail.com', '123','user_avatar_1580776352375.webp', 'admin',NULL, NULL),
	(DEFAULT, 'Lisa', 'Cambio Foto', 'meatismurder@mail.com', '123','user_avatar_1580777335197.png','user', NULL, NULL),
	(DEFAULT, 'Rick', 'Sanchez', 'funeralswithcake@mail.com', '$2b$10$tZk.MYas30p5/4zJ30/I/u9NGV94lsphX6MmEPLlogeaj5DoIlguS','user_avatar_1577579630725.PNG', 'admin',NULL, NULL),
	(DEFAULT, 'Randy', 'Marsh', 'cockmagic@mail.com', '$2b$10$UQFtmNAvA0ZueCxoQcXfy.zPrMtZKDIj4JMY2Rj1yZ0Y7quEgh0o.','user_avatar_1577580433156.PNG','user', NULL, NULL),
	(DEFAULT, 'Stan', 'Marsh', 'everythingsucks@mail.com', '$2b$10$tcbettQyW.evsonmM8T6yuUrJNU7bhQQx3gbQlO/NT6muXjaB1KSC','user_avatar_1580509324852.PNG','user', NULL, NULL),
	(DEFAULT, 'Señor', 'Burros', 'srburros@mail.com', '$2b$10$CzbrtBRmunXi00gt/Q7DpOFzo.PMrvThlDKz0mj14V.M2sdbtIIdm','user_avatar_1580601555334.png','user', NULL, NULL),
	(DEFAULT, 'Marge', 'Bouvier', 'marge@mail.com', '$2b$10$DMPdxjrxmrEIq0YqQE/zseU08DCSHIKZolHYdxnL4YqMUEk87lQke','user_avatar_1580584879034.PNG','user', NULL, NULL),
	(DEFAULT, 'Alexa', 'Contreras', 'alexaila@outlook.com', '$2b$10$mxhymWmcHA7ZhY7m//icXe19t0yybSpY7TO8Rkdc0/Rf5oo6zK6MG','user_avatar_1579216350838.jpg','user', NULL, NULL),
	(DEFAULT, 'Sandra Milena', 'Rodriguez Porras', 'milena@mail.com', '$2b$10$V/biBYGhpzQuptv4j9z6k.LrgtLg3SjmE2ubb4zQtuT9SpZoex2UW','user_avatar_1580777869492.PNG','user', NULL, NULL),
	(DEFAULT, 'Ron', 'Weasley', 'ron@mail.com', '$2b$10$mxhymWmcHA7ZhY7m//icXe19t0yybSpY7TO8Rkdc0/Rf5oo6zK6MG','user_avatar_1579216350838.jpg','user', NULL, NULL);
