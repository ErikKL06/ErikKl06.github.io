-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mariadb
-- Generation Time: Mar 21, 2025 at 11:35 AM
-- Server version: 11.5.2-MariaDB-ubu2404
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gyprojekt`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` char(36) NOT NULL,
  `username` varchar(40) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL,
  `highscore` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `username`, `email`, `password`, `highscore`) VALUES
('2ac4cbea-dd99-11ef-8f06-0242ac141002', 'Vice06', '06jovi@gmail.com', '$2y$12$7ffpVbtZ2dLdxaIDiaQn9.JkLgzyVTV1mLvAghyqjGAjaITfJB9ue', 44),
('3e18895d-00dc-11f0-97a8-0242ac141003', 'erik', 'erik.klener@gmail.com', '$2y$12$xPdD7OO9NWJHn7Edl6fEKOslepneaauKL3VsHjWSygJzxE1054HQy', 10),
('462f6adb-e3c1-11ef-8045-0242ac141002', 'erikr', 'rik.klener@gmail.com', '$2y$12$VewIimkkTYbvwQ7HBZqyD.18JBwJ/jgpXBW4N3kTRpgwsI8uddbLW', NULL),
('73f3506c-dd78-11ef-8f06-0242ac141002', 'frosty_rizz69', '06laal@skola.engelholm.se', '$2y$12$M8t64d.IpxqygDYwMH6i5e08kvzSmCT9HIEXgtzIhEiAeg05J5R1.', 36),
('7eca4b70-dc9b-11ef-a854-0242ac141002', 'bjtu', 'killenture@hotmail.com', '$2y$12$MyA9wRWG9yCUI4wFg2VI5O/uvMZIlTGu2VNON86RNcHjP/D/qCQve', 1),
('8818314c-dbf7-11ef-92c2-0242ac141002', 'idaCool93', 'wedbergida@gmail.com', '$2y$12$8riS46MzQUjSrs/SKqs7TeJrCzGj3A7FXxE8gvZk83UqUA7ILcaYm', 52);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
