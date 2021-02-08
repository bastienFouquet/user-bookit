-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 08 fév. 2021 à 08:40
-- Version du serveur :  8.0.22
-- Version de PHP : 7.3.24-(to be removed in future macOS)

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `users`
--
CREATE DATABASE IF NOT EXISTS `users` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `users`;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
                        `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                        `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                        `createdAt` datetime DEFAULT NULL,
                        `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `roles` (`id`, `value`, `createdAt`, `updatedAt`) VALUES
('ec411cdc-7608-48e8-b094-d4bdc1d26172', 'User', '2021-02-08 09:37:57', '2021-02-08 09:37:57'),
('d9369ffb-3c72-49cd-b10a-02ffb0a0ffec', 'Admin', '2021-02-08 09:37:57', '2021-02-08 09:37:57');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
                         `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                         `login` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                         `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                         `role_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                         `createdAt` datetime DEFAULT NULL,
                         `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
