-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mer. 28 août 2019 à 22:43
-- Version du serveur :  10.3.16-MariaDB
-- Version de PHP :  7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mooc`
--

-- --------------------------------------------------------

--
-- Structure de la table `connexion`
--

CREATE TABLE `connexion` (
  `id` int(11) NOT NULL,
  `id_personne` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `connexion`
--

INSERT INTO `connexion` (`id`, `id_personne`, `date`) VALUES
(3, 1, '2019-04-16 16:18:07'),
(4, 1, '2019-04-16 16:24:21'),
(5, 11, '2019-04-16 19:25:07'),
(6, 1, '2019-04-16 19:41:10'),
(7, 1, '2019-04-16 19:47:24'),
(8, 1, '2019-04-16 19:48:24'),
(9, 1, '2019-04-16 19:53:27'),
(10, 1, '2019-04-16 19:54:22'),
(11, 1, '2019-04-16 19:55:59'),
(12, 1, '2019-04-16 19:57:34'),
(13, 1, '2019-04-16 19:59:10'),
(14, 1, '2019-04-16 20:04:06'),
(15, 1, '2019-04-16 20:04:36'),
(16, 1, '2019-04-16 20:07:12'),
(17, 1, '2019-04-17 01:44:39'),
(18, 1, '2019-04-17 01:50:58'),
(19, 1, '2019-04-17 01:53:41'),
(20, 1, '2019-04-17 01:56:33'),
(21, 1, '2019-04-17 02:03:17'),
(22, 1, '2019-04-17 02:04:41'),
(23, 1, '2019-04-17 02:07:12'),
(24, 1, '2019-04-17 12:54:57'),
(25, 1, '2019-04-17 13:01:21'),
(26, 1, '2019-04-17 13:04:23'),
(27, 1, '2019-04-17 13:05:49'),
(28, 1, '2019-04-17 13:07:41'),
(29, 1, '2019-04-17 13:12:58'),
(30, 1, '2019-04-17 13:24:28'),
(31, 1, '2019-04-17 13:25:28'),
(32, 1, '2019-04-17 13:29:25'),
(33, 1, '2019-04-17 13:31:23'),
(34, 1, '2019-04-17 13:35:09'),
(35, 1, '2019-04-17 13:36:33'),
(36, 1, '2019-04-17 13:37:42'),
(37, 1, '2019-04-20 16:34:36'),
(38, 1, '2019-04-20 16:55:48'),
(39, 1, '2019-04-20 16:58:16'),
(40, 1, '2019-04-20 17:00:04'),
(41, 1, '2019-04-20 17:08:33'),
(42, 1, '2019-04-20 17:09:24'),
(43, 1, '2019-04-20 17:09:51'),
(44, 1, '2019-04-20 17:11:03'),
(45, 1, '2019-04-20 17:16:20'),
(46, 1, '2019-04-20 17:17:27'),
(47, 1, '2019-04-20 17:19:15'),
(48, 1, '2019-04-20 17:19:40'),
(49, 1, '2019-04-20 17:28:06'),
(50, 1, '2019-04-20 17:28:31'),
(51, 1, '2019-04-20 17:33:37'),
(52, 1, '2019-04-20 17:34:39'),
(53, 1, '2019-04-20 17:35:03'),
(54, 1, '2019-04-20 17:43:47'),
(55, 1, '2019-04-20 17:44:26'),
(56, 1, '2019-04-20 17:45:51'),
(57, 1, '2019-04-20 17:46:27'),
(58, 1, '2019-04-20 17:47:55'),
(59, 1, '2019-04-20 17:48:57'),
(60, 1, '2019-04-20 17:55:33'),
(61, 1, '2019-04-20 17:56:19'),
(62, 1, '2019-04-20 18:02:32'),
(63, 1, '2019-04-20 18:04:55'),
(64, 1, '2019-04-20 18:05:16'),
(65, 1, '2019-04-20 18:05:57'),
(66, 1, '2019-04-20 18:06:21'),
(67, 1, '2019-04-20 18:07:47'),
(68, 1, '2019-04-20 18:08:04'),
(69, 1, '2019-04-20 18:08:36'),
(70, 1, '2019-04-20 18:13:56'),
(71, 1, '2019-04-20 18:14:41'),
(72, 1, '2019-04-20 18:19:56'),
(73, 1, '2019-04-20 18:20:38'),
(74, 1, '2019-04-20 18:24:01'),
(75, 1, '2019-04-20 18:25:12'),
(76, 1, '2019-04-20 18:26:06'),
(77, 1, '2019-04-20 18:26:40'),
(78, 1, '2019-04-20 18:30:28'),
(79, 1, '2019-04-20 18:31:54'),
(80, 1, '2019-04-20 18:33:44'),
(81, 1, '2019-04-20 18:35:09'),
(82, 1, '2019-04-20 18:35:27'),
(83, 1, '2019-04-20 18:36:29'),
(84, 1, '2019-04-20 18:38:32'),
(85, 1, '2019-04-20 18:44:57'),
(86, 1, '2019-04-20 18:45:44'),
(87, 1, '2019-04-20 18:46:51'),
(88, 1, '2019-04-20 18:48:58'),
(89, 1, '2019-04-20 18:49:58'),
(90, 1, '2019-04-20 18:53:15'),
(91, 1, '2019-04-20 18:53:59'),
(92, 1, '2019-04-20 18:55:00'),
(93, 1, '2019-04-20 18:55:20'),
(94, 1, '2019-04-20 18:56:18'),
(95, 1, '2019-04-20 18:56:32'),
(96, 1, '2019-04-20 18:56:56'),
(97, 1, '2019-04-20 18:57:40'),
(98, 1, '2019-04-20 18:58:07'),
(99, 1, '2019-04-20 18:58:51'),
(100, 1, '2019-04-20 18:59:24'),
(101, 1, '2019-04-20 19:00:01'),
(102, 1, '2019-04-20 19:01:59'),
(103, 1, '2019-04-20 19:02:42'),
(104, 1, '2019-04-20 20:06:10'),
(105, 1, '2019-04-20 20:19:35'),
(106, 1, '2019-04-20 20:41:25'),
(107, 1, '2019-04-20 21:14:08'),
(108, 1, '2019-04-21 20:56:53'),
(109, 1, '2019-04-21 21:00:38'),
(110, 1, '2019-04-21 21:01:17'),
(111, 1, '2019-04-21 21:09:38'),
(112, 1, '2019-04-21 21:09:58'),
(113, 1, '2019-04-23 13:21:07'),
(114, 1, '2019-04-23 13:22:18'),
(115, 1, '2019-04-23 13:23:08'),
(116, 1, '2019-04-23 13:31:23'),
(117, 1, '2019-04-23 13:32:50'),
(118, 1, '2019-04-23 13:33:34'),
(119, 1, '2019-04-27 13:28:07'),
(120, 1, '2019-04-27 13:31:28'),
(121, 1, '2019-04-27 14:02:24'),
(122, 1, '2019-04-27 14:03:28'),
(123, 1, '2019-04-27 14:03:35'),
(124, 1, '2019-04-27 14:28:32'),
(125, 1, '2019-04-27 14:33:26'),
(126, 1, '2019-04-27 15:01:23'),
(127, 11, '2019-04-27 15:30:28'),
(128, 1, '2019-04-27 18:57:33'),
(129, 8, '2019-04-27 23:15:26'),
(130, 8, '2019-04-27 23:46:01'),
(131, 8, '2019-04-27 23:49:30'),
(132, 8, '2019-04-27 23:50:31'),
(133, 8, '2019-04-27 23:51:32'),
(134, 1, '2019-04-27 23:54:09'),
(135, 1, '2019-04-28 00:05:12'),
(136, 1, '2019-04-28 00:06:27'),
(137, 1, '2019-04-28 00:43:35'),
(138, 1, '2019-04-28 01:13:35'),
(139, 1, '2019-04-29 15:14:39'),
(140, 1, '2019-04-29 15:15:35'),
(141, 1, '2019-04-29 15:47:42'),
(142, 1, '2019-04-30 13:43:03'),
(143, 1, '2019-04-30 16:36:45'),
(144, 1, '2019-05-18 19:11:04'),
(145, 1, '2019-05-19 15:53:43'),
(146, 1, '2019-05-19 16:04:04'),
(147, 1, '2019-05-19 16:15:01'),
(148, 1, '2019-05-19 19:28:20'),
(149, 1, '2019-05-20 00:24:39'),
(150, 1, '2019-05-22 16:01:03'),
(151, 1, '2019-05-22 14:48:42'),
(152, 1, '2019-05-22 14:49:36'),
(153, 1, '2019-05-22 14:57:01'),
(154, 1, '2019-05-22 15:14:50'),
(155, 1, '2019-05-22 15:26:49'),
(156, 1, '2019-05-22 15:34:49'),
(157, 1, '2019-05-22 16:07:23'),
(158, 1, '2019-05-23 09:52:26'),
(159, 1, '2019-05-24 23:07:59'),
(160, 1, '2019-05-25 11:33:01'),
(161, 1, '2019-05-25 17:57:54'),
(162, 1, '2019-05-26 14:19:33'),
(163, 1, '2019-05-26 14:38:32'),
(164, 1, '2019-05-26 20:22:48'),
(165, 1, '2019-05-26 21:13:13'),
(166, 1, '2019-05-26 21:43:04'),
(167, 12, '2019-05-27 21:15:25'),
(168, 11, '2019-05-27 21:15:44'),
(169, 12, '2019-05-27 21:23:06'),
(170, 1, '2019-05-27 21:35:47'),
(171, 1, '2019-05-28 13:03:13'),
(172, 1, '2019-05-28 13:58:48'),
(173, 1, '2019-06-19 10:24:36'),
(174, 1, '2019-06-19 15:11:08'),
(175, 1, '2019-06-27 14:38:13'),
(176, 1, '2019-07-02 12:44:32'),
(177, 1, '2019-07-26 14:03:18');

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

CREATE TABLE `cours` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `lien` text NOT NULL,
  `code_module` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cours`
--

INSERT INTO `cours` (`id`, `nom`, `type`, `lien`, `code_module`) VALUES
(1, 'Cours 1 : Les bases', 'pdf', 'http://www.lirmm.fr/~seriai/uploads/Enseignement/Cours1android2019_1.pdf', 'HMIN222'),
(3, 'Cours 3 : capteurs', 'pdf', 'http://www.lirmm.fr/~seriai/uploads/Enseignement/coursCapteur2016.pdf', 'HMIN222'),
(4, 'Tuto', 'video', 'https://drive.google.com/file/d/1wMMtd8HEm5XV3AsLvh2KI6p9RTj01OG9/view?usp=sharing', 'HMIN222');

-- --------------------------------------------------------

--
-- Structure de la table `etudiantmodule`
--

CREATE TABLE `etudiantmodule` (
  `id_etudiant` int(11) NOT NULL,
  `id_module` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `etudiantmodule`
--

INSERT INTO `etudiantmodule` (`id_etudiant`, `id_module`) VALUES
(1, 'HMIN205'),
(1, 'HMIN222');

-- --------------------------------------------------------

--
-- Structure de la table `etudiantqcm`
--

CREATE TABLE `etudiantqcm` (
  `id` int(11) NOT NULL,
  `id_etudiant` int(11) NOT NULL,
  `id_qcm` int(11) NOT NULL,
  `result` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `etudiantqcm`
--

INSERT INTO `etudiantqcm` (`id`, `id_etudiant`, `id_qcm`, `result`, `date`) VALUES
(6, 11, 7, 70, '2019-04-19 00:00:00'),
(7, 12, 7, 0, '2019-05-27 21:23:40'),
(8, 12, 1, 50, '2019-05-27 21:25:09'),
(9, 1, 1, 50, '2019-05-27 21:49:40'),
(11, 1, 9, 50, '2019-05-28 13:04:28');

-- --------------------------------------------------------

--
-- Structure de la table `famille`
--

CREATE TABLE `famille` (
  `id_parent` int(11) NOT NULL,
  `id_enfant` int(11) NOT NULL,
  `credits` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `famille`
--

INSERT INTO `famille` (`id_parent`, `id_enfant`, `credits`) VALUES
(5, 1, 22200),
(5, 8, 22200),
(5, 11, 22200),
(5, 12, 22200),
(5, 15, 22200),
(7, 6, 90);

-- --------------------------------------------------------

--
-- Structure de la table `historique`
--

CREATE TABLE `historique` (
  `id` int(11) NOT NULL,
  `id_personne` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `value` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `historique`
--

INSERT INTO `historique` (`id`, `id_personne`, `type`, `value`) VALUES
(2, 5, 'Depot', 200),
(3, 5, 'Depot', 1000),
(4, 5, 'Depot', 200),
(5, 1, 'Retrait', 200),
(6, 1, 'Retrait', 200),
(7, 1, 'Retrait', 200),
(8, 1, 'Retrait', 200),
(9, 1, 'Retrait', 200),
(10, 1, 'Retrait', 200),
(11, 1, 'Retrait', 200),
(12, 1, 'Retrait', 200),
(13, 1, 'Retrait', 200),
(14, 5, 'Depot', 200),
(15, 1, 'Retrait', 200),
(16, 1, 'Retrait', 200),
(17, 1, 'Retrait', 300),
(18, 5, 'Depot', 300);

-- --------------------------------------------------------

--
-- Structure de la table `module`
--

CREATE TABLE `module` (
  `id` varchar(100) NOT NULL,
  `matiere` varchar(100) NOT NULL,
  `price` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `module`
--

INSERT INTO `module` (`id`, `matiere`, `price`) VALUES
('HMIN205', 'Architectures Distribués', 300),
('HMIN222', 'Dev mobile', 100),
('HMIN222M', 'Base de données avancées', 250),
('HMIN229', 'Preuve du Programme', 200);

-- --------------------------------------------------------

--
-- Structure de la table `profmodule`
--

CREATE TABLE `profmodule` (
  `id_user` int(11) NOT NULL,
  `id_module` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `profmodule`
--

INSERT INTO `profmodule` (`id_user`, `id_module`) VALUES
(3, 'HMIN222'),
(3, 'HMIN229'),
(9, 'HMIN222');

-- --------------------------------------------------------

--
-- Structure de la table `qcm`
--

CREATE TABLE `qcm` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `id_module` varchar(100) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `qcm`
--

INSERT INTO `qcm` (`id`, `nom`, `id_module`, `content`) VALUES
(1, 'QCM1', 'HMIN222', 'Question 1?1$Question 2?0'),
(7, 'dezzef', 'HMIN229', 'Question 1?1$Question 2?0'),
(9, 'QCM3', 'HMIN222', 'Question 1?1$Question 2?0'),
(10, 'newqcm', 'HMIN222', 'android est facile?1$android est difficile?0');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `nom`, `prenom`, `age`, `type`) VALUES
(1, 'oussama', '202cb962ac59075b964b07152d234b70', 'oussama@gmail.com', 'BELLEL', 'Oussama', 24, 'Student'),
(2, 'bellel', '202cb962ac59075b964b07152d234b70', 'bellel@gmail.com', '', '', 0, ''),
(3, 'local', 'f5ddaf0ca7929578b408c909429f68f2', 'local', 'local', 'local', 15, 'Teacher'),
(4, 'localtest', '012c230f236d6a3f761ba956e7dff26a', 'localtest', '', '', 0, ''),
(5, 'test123', 'cc03e747a6afbbcbf8be7668acfebee5', 'test123@mooc.com', 'parent1', 'parent1lastname', 0, 'Parent'),
(6, 'new', '22af645d1859cb5ca6da0c484f1f37ea', 'new', 'new', 'new', 0, 'Student'),
(7, 'newtest', '0876b6b0db0707db221a5c736d8a896a', 'newtest@zz.nm', '', '', 0, 'Parent'),
(8, 'Enfant8', 'f0bb165cb11d708a3d0b9d955ab8c5f5', 'Enfant8@mooc.fr', 'Enfant8', 'Enfant8', 0, 'Student'),
(9, 'prof', 'd450c5dbcc10db0749277efc32f15f9f', 'prof', 'null', 'null', 25, 'Teacher'),
(11, 'safi', '82a5a90a32c0fb07e8d3d54d40923f03', 'streamgoals9@gmail.com', 'bellel', 'safi', 20, 'Student'),
(12, 'abdallah', 'ae034dc2a8a3c262fadda5006832e7dd', 'oussama.bellel@etu.umontpellier.fr', 'herri', 'abdallah', 15, 'Student'),
(14, 'parent1', '202cb962ac59075b964b07152d234b70', 'parent1@mooc.fr', 'paretName', 'parentlastname', 43, 'Parent'),
(15, 'enfant1', '202cb962ac59075b964b07152d234b70', 'enfant1@mooc.fr', 'myname', 'enfant', 18, 'Student');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `connexion`
--
ALTER TABLE `connexion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_connexion` (`id_personne`);

--
-- Index pour la table `cours`
--
ALTER TABLE `cours`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_module` (`code_module`);

--
-- Index pour la table `etudiantmodule`
--
ALTER TABLE `etudiantmodule`
  ADD PRIMARY KEY (`id_etudiant`,`id_module`),
  ADD KEY `fk2` (`id_module`);

--
-- Index pour la table `etudiantqcm`
--
ALTER TABLE `etudiantqcm`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_etudiantqcm` (`id_etudiant`),
  ADD KEY `test` (`id_qcm`);

--
-- Index pour la table `famille`
--
ALTER TABLE `famille`
  ADD PRIMARY KEY (`id_parent`,`id_enfant`),
  ADD KEY `fk_enfant` (`id_enfant`);

--
-- Index pour la table `historique`
--
ALTER TABLE `historique`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_personne` (`id_personne`);

--
-- Index pour la table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `profmodule`
--
ALTER TABLE `profmodule`
  ADD PRIMARY KEY (`id_user`,`id_module`),
  ADD KEY `kklk` (`id_module`);

--
-- Index pour la table `qcm`
--
ALTER TABLE `qcm`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_qcm` (`id_module`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `connexion`
--
ALTER TABLE `connexion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT pour la table `cours`
--
ALTER TABLE `cours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `etudiantqcm`
--
ALTER TABLE `etudiantqcm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `historique`
--
ALTER TABLE `historique`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `qcm`
--
ALTER TABLE `qcm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `connexion`
--
ALTER TABLE `connexion`
  ADD CONSTRAINT `fk_connexion` FOREIGN KEY (`id_personne`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `cours`
--
ALTER TABLE `cours`
  ADD CONSTRAINT `fk_module` FOREIGN KEY (`code_module`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `etudiantmodule`
--
ALTER TABLE `etudiantmodule`
  ADD CONSTRAINT `fk` FOREIGN KEY (`id_etudiant`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk2` FOREIGN KEY (`id_module`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `etudiantqcm`
--
ALTER TABLE `etudiantqcm`
  ADD CONSTRAINT `fk_etudiantqcm` FOREIGN KEY (`id_etudiant`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `test` FOREIGN KEY (`id_qcm`) REFERENCES `qcm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `famille`
--
ALTER TABLE `famille`
  ADD CONSTRAINT `fk_enfant` FOREIGN KEY (`id_enfant`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_parent` FOREIGN KEY (`id_parent`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `historique`
--
ALTER TABLE `historique`
  ADD CONSTRAINT `fk_personne` FOREIGN KEY (`id_personne`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `profmodule`
--
ALTER TABLE `profmodule`
  ADD CONSTRAINT `fk_userss` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `kklk` FOREIGN KEY (`id_module`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `qcm`
--
ALTER TABLE `qcm`
  ADD CONSTRAINT `fk_qcm` FOREIGN KEY (`id_module`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
