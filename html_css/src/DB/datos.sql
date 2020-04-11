-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-03-2020 a las 22:39:57
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mundoparlante_db`
--

-- --------------------------------------------------------


--

INSERT INTO `brands` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Genelec', NULL, NULL),
(2, 'Rock It', NULL, NULL),
(3, 'KRK Systems', NULL, NULL),
(4, 'ATC', NULL, NULL),
(5, 'JBL', NULL, NULL),
(6, 'Neumann', NULL, NULL),
(7, 'Marca X', NULL, NULL),
(8, 'Marca Z', NULL, NULL);

--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `brand_id`, `model`, `description`, `user_id`, `createdAt`, `updatedAt`) VALUES
(12, 'Subwoofer', '980.00', 'product_avatar_1580588211495.png', 4, 'KH 750 DSP D G', 'El compacto DSP KH 750 es la opción ideal para salas más pequeñas y monitores de estudio más pequeños. Tiene un Administrador de bajos único y flexible (2.0 / 0.1), entradas analógicas y digitales, cuatro modos de enrutamiento y controles acústicos adaptables para usarse en muchas configuraciones diferentes.La aplicación opcional para iPad® Neumann.', 16, NULL, NULL),
(15, 'Parlante 34', '789.00', 'product_avatar_1580665789963.png', 2, '45SDF', 'Las descripciones de producto son textos que explican las características y características de los productos. Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra', 3, NULL, NULL),
(16, 'Parlante Bolita', '4863.00', 'product_avatar_1580665817849.png', 3, '46TX1W', 'Las descripciones de producto son textos que explican las características y características de los productos. Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra', 3, NULL, NULL),
(17, 'Parlante 3', '1254.00', 'product_avatar_1580665838732.png', 5, 'AS56DF', 'Las descripciones de producto son textos que explican las características y características de los productos. Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra', 4, NULL, NULL),
(18, 'Parlante Alargado', '456.00', 'product_avatar_1580665872455.png', 5, 'AZ34FS', 'Las descripciones de producto son textos que explican las características y características de los productos. Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra', 3, NULL, NULL),
(19, 'Parlante Grande', '189.00', 'product_avatar_1580665942382.png', 1, 'aWEEW', 'Las descripciones de producto son textos que explican las características y características de los productos. Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra', 4, NULL, NULL),
(25, 'Parlante 42', '456.00', 'product_avatar_1580831007686.png', 1, 'aWEEW', 'Las descripciones de producto son textos que explican las características y características de los productos. Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra', 3, NULL, NULL),
(27, 'Parlante 4', '753.00', 'product_avatar_1580842826232.png', 6, 'AZ34FS', 'Las descripciones de producto son textos que explican las características y características de los productos. Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra', 3, NULL, NULL),
(31, 'Parlante 84', '3456.00', 'product_avatar_1581955717925.png', 7, 'AZ34FSS', 'Las descripciones de producto son textos que explican las características y características de los productos. Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra', 3, NULL, NULL),
(32, 'Parlante Horizontal', '865.00', 'product_avatar_1582133202602.jpg', 8, 'AZ34FS', 'Las descripciones de producto son textos que explican las características y características de los productos. Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra', 3, NULL, NULL),
(33, 'Parlante Pequeño', '234.00', 'product_avatar_1583894820374.png', 8, 'aWEEW', 'Las descripciones de producto son textos que explican las características y características de los productos. Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra', 3, NULL, NULL),
(38, 'Bocina', '123.00', 'product_avatar_1585345294319.jpg', 3, 'AS56DF', 'Las descripciones de producto son textos que explican las características y características de los productos. Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra', 3, NULL, NULL);


--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `avatar`, `role`, `createdAt`, `updatedAt`) VALUES
(3, 'Rick', 'Sanchez', 'funeralswithcake@mail.com', '$2b$10$tZk.MYas30p5/4zJ30/I/u9NGV94lsphX6MmEPLlogeaj5DoIlguS', 'user_avatar_1577579630725.PNG', 'admin', NULL, NULL),
(4, 'Randy', 'Marsh', 'cockmagic@mail.com', '$2b$10$UQFtmNAvA0ZueCxoQcXfy.zPrMtZKDIj4JMY2Rj1yZ0Y7quEgh0o.', 'user_avatar_1577580433156.PNG', 'admin', NULL, NULL),
(5, 'Stan', 'Marsh', 'everythingsucks@mail.com', '$2b$10$tcbettQyW.evsonmM8T6yuUrJNU7bhQQx3gbQlO/NT6muXjaB1KSC', 'user_avatar_1580509324852.PNG', 'user', NULL, NULL),
(8, 'Alexa', 'Contreras', 'alexaila@outlook.com', '$2b$10$mxhymWmcHA7ZhY7m//icXe19t0yybSpY7TO8Rkdc0/Rf5oo6zK6MG', 'user_avatar_1585682800503.PNG', 'user', NULL, NULL),
(9, 'Sandra Milena', 'Rodriguez Porras', 'milena@mail.com', '$2b$10$V/biBYGhpzQuptv4j9z6k.LrgtLg3SjmE2ubb4zQtuT9SpZoex2UW', 'user_avatar_1580777869492.PNG', 'user', NULL, NULL),
(10, 'Ron', 'Weasley', 'ron@mail.com', '$2b$10$mxhymWmcHA7ZhY7m//icXe19t0yybSpY7TO8Rkdc0/Rf5oo6zK6MG', 'user_avatar_1579216350838.jpg', 'user', NULL, NULL),
(11, 'Hermione', 'Granger', 'hermione@mail.com', '$2b$10$V/biBYGhpzQuptv4j9z6k.LrgtLg3SjmE2ubb4zQtuT9SpZoex2UW', 'user_avatar_1579203156775.PNG', 'user', NULL, NULL),
(12, 'Tom', 'Riddle', 'voldemort@mail.com', '$2b$10$vJDfomjkL1QiCZ9hn7aag.tIjBOWRXzMDtiIpLpD.xwN7BrEUIHU6', 'no-image.png', 'user', NULL, NULL),
(14, 'Severus', 'Snape', 'snape@mail.com', '$2b$10$Eel2KXsAu8wNz0fmfG0Ar.ewwtmixpSoP9dhUfTpasHkevhlNSC6C', 'user_avatar_1580680331293.PNG', 'user', NULL, NULL),
(16, 'Wendy', 'Testaburger', 'violetbaggins@gmail.com', '$2b$10$6lFSt7QwmI7QJqOxDM1jEeJnmLUJEe3TzAYKbQR4/hBHEnbvweLSW', 'user_avatar_1580780811293.PNG', 'admin', NULL, NULL),
(18, 'Hanson', 'Hanson', 'pruebasinfoto@mail.com', '$2b$10$Mr.veoWNv9ORf6yqUQRTGuKwaN4JRPOwihK1MJv5wv2KxkjLvLv5K', 'user_avatar_1580831423516.JPG', 'user', NULL, NULL),
(19, 'Nuevo', 'User', 'nuevouser@mail.com', '$2b$10$VVnV9V6mTybj84BPN1IRgOVM3ww1iOGnwhQV1fxVVO4SMQhYDRXF6', 'user_avatar_1580870296015.png', 'user', NULL, NULL),
(20, 'Pepito', 'Williamson', 'pepito@mail.com', '$2b$10$Vl.3CjmDVTnN5CqCOtyHneZS9ppl5EuFugKWx6SUgXnjQMHy.jMUK', 'user_avatar_1581949580580.PNG', 'user', NULL, NULL),
(23, 'Carolina', 'Marcela', 'caro@mail.com', '$2b$10$LdR9D.BFERDzbZwdr3ZKmuhEv.uOLYyEfYUUOUfQylWuuwfH1Ub/m', 'user_avatar_1585682730316.jpeg', 'user', NULL, NULL),
(27, 'seniora', 'poposin', 'poposin@mail.com', '$2b$10$UdEjUNYlb5a7Bmg1NYs2CO6y51r/nET/uzMwMsiC3DRmS3Df0/29q', 'user_avatar_1585271579303.GIF', 'user', NULL, NULL),
(29, 'Role', 'User', 'aversiguarda@mail.com', '$2b$10$WRTi637577SeaQAxH8dm9O8M8/hagCNqMJU48G..gioPCuZqY78qS', 'user_avatar_1585417470825.PNG', 'user', NULL, NULL),
(30, 'Paola', 'Escudero', 'hello@mail.com', '$2b$10$iZ2BFeUL6RKHSo4bE1SSQOIxH8dOSS.VXxsg.uHkfaO/WVLs4I.1u', 'user_avatar_1585516398392.gif', 'user', NULL, NULL),
(31, 'batman', 'lego', 'batman@mail.com', '$2b$10$QV55csV0hKnjtyq6IqtuROiowaQCETEyjjGiEHbPseoaZmVMF60Aa', 'user_avatar_1585682895869.PNG', 'user', NULL, NULL),
(32, 'Lenny', 'Leonard', 'lenny@mail.com', '$2b$10$9DGp2J3toAn.CiyFeOYXgOvsP11PS2ebKg1vJrZSF4WYSjvP.qjhi', 'user_avatar_1585613051138.PNG', 'user', NULL, NULL),
(33, 'Pepe', 'Manuel', 'pepemanuel@mail.com', '$2b$10$xUIKzFsiLVrVH1/VqQJGlOu9671xAtMMvkf6AiW..kEs1g0qLmOAe', 'user_avatar_1585619327065.PNG', 'user', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
