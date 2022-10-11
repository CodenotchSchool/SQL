-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2022 a las 17:58:05
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `escuela`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `groups`
--

CREATE TABLE `groups` (
  `group_id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `groups`
--

INSERT INTO `groups` (`group_id`, `name`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C'),
(4, 'D'),
(5, 'E'),
(6, 'F'),
(7, 'G'),
(8, 'H'),
(9, 'I'),
(10, 'J');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marks`
--

CREATE TABLE `marks` (
  `mark_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `mark` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marks`
--

INSERT INTO `marks` (`mark_id`, `student_id`, `subject_id`, `date`, `mark`) VALUES
(1, 1, 1, '2021-10-12', 8),
(2, 1, 2, '2021-09-12', 6),
(3, 1, 3, '2021-08-12', 8),
(4, 2, 1, '2021-08-18', 9),
(5, 2, 2, '2021-08-20', 10),
(6, 2, 3, '2021-08-03', 7),
(7, 3, 1, '2021-08-25', 5),
(8, 3, 2, '2021-08-30', 4),
(9, 4, 5, '2021-08-25', 8),
(10, 4, 6, '2020-08-23', 4),
(11, 4, 8, '2020-08-30', 3),
(12, 5, 9, '2020-08-13', 5),
(13, 5, 10, '2022-08-14', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

CREATE TABLE `students` (
  `student_id` int(11) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `students`
--

INSERT INTO `students` (`student_id`, `first_name`, `last_name`, `group_id`) VALUES
(1, 'Enrique', 'Prieto', 1),
(2, 'Marta', 'González', 1),
(3, 'Roberto', 'Pérez', 1),
(4, 'Carlos', 'Álvarez', 2),
(5, 'Ricardo', 'Vera', 2),
(6, 'Andrés', 'Vázquez', 2),
(7, 'Andrea', 'Collado', 2),
(8, 'Jose', 'García', 3),
(9, 'Carlos', 'Pérez', 3),
(10, 'Manuel', 'Tripoul', 3),
(11, 'Álvaro', 'Miguens', 4),
(12, 'Miguel', 'Alonso', 4),
(13, 'César', 'Alonso', 5),
(14, 'Álvaro', 'Carballo', 5),
(15, 'Teresa', 'Mendaza', 5),
(16, 'Alberto', 'Fernández', 6),
(17, 'Mario', 'Fernández', 6),
(18, 'Ágata', 'Del Barco', 6),
(19, 'María', 'Pérez', 7),
(20, 'Andrés', 'Carballo', 7),
(21, 'Jose', 'Fuentes', 8),
(22, 'Joana', 'Mateo', 8),
(23, 'Roberto', 'Bodegas', 9),
(24, 'Alberto', 'Fuentes', 9),
(25, 'Marcos', 'García', 10),
(26, 'Marta', 'Pérez', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subjects`
--

CREATE TABLE `subjects` (
  `subject_id` int(11) NOT NULL,
  `tittle` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `subjects`
--

INSERT INTO `subjects` (`subject_id`, `tittle`) VALUES
(1, 'HTML y CSS'),
(2, 'JavaScript'),
(3, 'Node'),
(4, 'SQL'),
(5, 'Mongo'),
(6, 'Angular'),
(7, 'Java'),
(8, 'TypeScript'),
(9, 'Algoritmia'),
(10, 'Inglés');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subject_teacher`
--

CREATE TABLE `subject_teacher` (
  `subject_id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `subject_teacher`
--

INSERT INTO `subject_teacher` (`subject_id`, `teacher_id`, `group_id`) VALUES
(1, 3, 4),
(1, 3, 4),
(1, 7, 2),
(1, 7, 2),
(2, 1, 1),
(2, 1, 1),
(2, 1, 2),
(2, 1, 2),
(3, 7, 3),
(3, 7, 3),
(4, 2, 7),
(4, 2, 7),
(6, 4, 5),
(6, 4, 5),
(7, 6, 8),
(7, 6, 8),
(8, 3, 4),
(8, 3, 4),
(9, 2, 1),
(9, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teacehrs`
--

CREATE TABLE `teacehrs` (
  `teacher_id` int(11) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `teacehrs`
--

INSERT INTO `teacehrs` (`teacher_id`, `first_name`, `last_name`) VALUES
(1, 'Daniel', 'Vera'),
(2, 'Jose', 'Herrera'),
(3, 'Menchu', 'Martín'),
(4, 'Carlos', 'Sobera'),
(5, 'Antonio', 'González'),
(6, 'Carlos', 'Tessier'),
(7, 'Emilia', 'García'),
(8, 'Jorge', 'Holgado'),
(9, 'Carlos', 'Martín'),
(10, 'Manuela', 'Perez');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`group_id`);

--
-- Indices de la tabla `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`mark_id`),
  ADD KEY `subject_id_idx` (`subject_id`),
  ADD KEY `student_id_idx` (`student_id`);

--
-- Indices de la tabla `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `group_id_idx` (`group_id`);

--
-- Indices de la tabla `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`subject_id`);

--
-- Indices de la tabla `subject_teacher`
--
ALTER TABLE `subject_teacher`
  ADD KEY `subject_id` (`subject_id`,`teacher_id`,`group_id`),
  ADD KEY `id_teacher` (`teacher_id`),
  ADD KEY `id_group` (`group_id`);

--
-- Indices de la tabla `teacehrs`
--
ALTER TABLE `teacehrs`
  ADD PRIMARY KEY (`teacher_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `groups`
--
ALTER TABLE `groups`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `marks`
--
ALTER TABLE `marks`
  MODIFY `mark_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `subjects`
--
ALTER TABLE `subjects`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `teacehrs`
--
ALTER TABLE `teacehrs`
  MODIFY `teacher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `marks`
--
ALTER TABLE `marks`
  ADD CONSTRAINT `student_id` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `subject_id` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `group_id` FOREIGN KEY (`group_id`) REFERENCES `groups` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `subject_teacher`
--
ALTER TABLE `subject_teacher`
  ADD CONSTRAINT `id_group` FOREIGN KEY (`group_id`) REFERENCES `groups` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_subject` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teacehrs` (`teacher_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
