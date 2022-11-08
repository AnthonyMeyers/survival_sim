-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 08 nov 2022 om 21:06
-- Serverversie: 10.4.25-MariaDB
-- PHP-versie: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simulation`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20221102150542', '2022-11-02 16:05:52', 38),
('DoctrineMigrations\\Version20221106090516', '2022-11-06 10:05:25', 300);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `prop`
--

CREATE TABLE `prop` (
  `id` int(11) NOT NULL,
  `prp_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `prp_file` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `prop`
--

INSERT INTO `prop` (`id`, `prp_name`, `prp_file`) VALUES
(1, 'berrybush', 'berrybush.png'),
(2, 'rock1', 'rock1.png'),
(3, 'rock2', 'rock2.png');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `user`
--

INSERT INTO `user` (`id`, `username`, `roles`, `password`) VALUES
(1, 'admin', '[\"string\"]', '$2y$13$0twn70r1VLzB0.iqKUaitecU05qWDbxutOxSU7yhy8LRd9eO42kx6'),
(2, 'tester', '[\"string\"]', '$2y$13$MQbPqT6.g0.KWYDGa5NPIO3jIwSs1FA5j3Om3lYpdyiZbu6TNOOXm'),
(3, 'test', '[]', '$2y$13$7blaRrMPRQjgog1kCfQbOOTIqQwmSCYgr9UDbB3dDOC2eR7yNoD/K'),
(4, 'aze', '[]', '$2y$13$8DQecuaZDRHS218oYXCRs.YCrs2wBFG71cQjUPV0W4nLd4qFYIzCa');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `worldmap`
--

CREATE TABLE `worldmap` (
  `id` int(11) NOT NULL,
  `wmp_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `wmp_file` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `worldmap`
--

INSERT INTO `worldmap` (`id`, `wmp_name`, `wmp_file`) VALUES
(1, 'base_world', 'world.png');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `worldmap_prop`
--

CREATE TABLE `worldmap_prop` (
  `id` int(11) NOT NULL,
  `wmpp_wmp_id_id` int(11) NOT NULL,
  `wmpp_prp_id_id` int(11) NOT NULL,
  `wmpp_pos_x` int(11) NOT NULL,
  `wmpp_pos_y` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `worldmap_prop`
--

INSERT INTO `worldmap_prop` (`id`, `wmpp_wmp_id_id`, `wmpp_prp_id_id`, `wmpp_pos_x`, `wmpp_pos_y`) VALUES
(2, 1, 1, 5, 5),
(4, 1, 1, 10, 10),
(5, 1, 1, 13, 12),
(6, 1, 1, 7, 10),
(7, 1, 1, 9, 8),
(8, 1, 2, 1, 18),
(9, 1, 2, 3, 15),
(10, 1, 3, 5, 16),
(11, 1, 2, 2, 12),
(12, 1, 2, 4, 14),
(13, 1, 2, 23, 3),
(14, 1, 2, 26, 5),
(15, 1, 3, 27, 2),
(16, 1, 3, 6, 12);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexen voor tabel `prop`
--
ALTER TABLE `prop`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649F85E0677` (`username`);

--
-- Indexen voor tabel `worldmap`
--
ALTER TABLE `worldmap`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `worldmap_prop`
--
ALTER TABLE `worldmap_prop`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_A74BAD55F24BCC95` (`wmpp_wmp_id_id`),
  ADD KEY `IDX_A74BAD5533B182DB` (`wmpp_prp_id_id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `prop`
--
ALTER TABLE `prop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT voor een tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT voor een tabel `worldmap`
--
ALTER TABLE `worldmap`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT voor een tabel `worldmap_prop`
--
ALTER TABLE `worldmap_prop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `worldmap_prop`
--
ALTER TABLE `worldmap_prop`
  ADD CONSTRAINT `FK_A74BAD5533B182DB` FOREIGN KEY (`wmpp_prp_id_id`) REFERENCES `prop` (`id`),
  ADD CONSTRAINT `FK_A74BAD55F24BCC95` FOREIGN KEY (`wmpp_wmp_id_id`) REFERENCES `worldmap` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
