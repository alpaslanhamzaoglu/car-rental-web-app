-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2021 at 12:56 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aga`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `uID` int(11) DEFAULT NULL,
  `adminlevel` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `advert`
--

CREATE TABLE `advert` (
  `aID` int(11) NOT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `deptime` time DEFAULT NULL,
  `departure` varchar(255) DEFAULT NULL,
  `carmodel` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `adate` date DEFAULT NULL,
  `arrtime` time DEFAULT NULL,
  `uID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `advert`
--

INSERT INTO `advert` (`aID`, `destination`, `deptime`, `departure`, `carmodel`, `price`, `adate`, `arrtime`, `uID`) VALUES
(22, 'qwe', '11:22:00', 'asd', 'asd', 123, '2021-12-22', '11:34:00', 31);

-- --------------------------------------------------------

--
-- Table structure for table `pastpurchase`
--

CREATE TABLE `pastpurchase` (
  `aID` int(11) DEFAULT NULL,
  `uID` int(11) DEFAULT NULL,
  `pID` int(11) NOT NULL,
  `purcdate` date DEFAULT NULL,
  `creditCardNumber` varchar(255) DEFAULT NULL,
  `creditCardCVV` int(11) DEFAULT NULL,
  `creditCardDate` date DEFAULT NULL,
  `creditCardName` varchar(255) DEFAULT NULL,
  `creditCardEmail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pastpurchase`
--

INSERT INTO `pastpurchase` (`aID`, `uID`, `pID`, `purcdate`, `creditCardNumber`, `creditCardCVV`, `creditCardDate`, `creditCardName`, `creditCardEmail`) VALUES
(5, 31, 1, '2021-12-28', '1', 1, '2021-12-28', 'a', 'a'),
(5, 31, 2, '2021-12-22', '5209325006588543', 178, '2021-12-22', 'a', 'a'),
(5, 31, 3, '2021-12-14', '1234123412341234', 558, '2021-12-14', 'ax', 'aqw'),
(5, 31, 4, '2021-12-07', '1222122312241225', 112, '2021-12-07', 'a', 'axd'),
(5, 31, 5, '2021-12-06', '1444442222333355', 123, '2021-12-06', 'aqw', 'zxc'),
(6, 31, 6, '2021-12-24', '1234123412342345', 562, '2021-12-24', 'Goksu', 'gokcal@gokcal.com');

-- --------------------------------------------------------

--
-- Table structure for table `rentcarpurchase`
--

CREATE TABLE `rentcarpurchase` (
  `rID` int(11) NOT NULL,
  `cID` int(11) DEFAULT NULL,
  `uID` int(11) DEFAULT NULL,
  `rentpurcdate` date DEFAULT NULL,
  `creditCardNumber` varchar(255) DEFAULT NULL,
  `creditCardCVV` int(11) DEFAULT NULL,
  `creditCardDate` date DEFAULT NULL,
  `creditCardName` varchar(255) DEFAULT NULL,
  `creditCardEmail` varchar(255) DEFAULT NULL,
  `begindate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rentcarpurchase`
--

INSERT INTO `rentcarpurchase` (`rID`, `cID`, `uID`, `rentpurcdate`, `creditCardNumber`, `creditCardCVV`, `creditCardDate`, `creditCardName`, `creditCardEmail`, `begindate`, `enddate`) VALUES
(1, 1, 31, '2021-12-16', '1234123412341234', 123, '2022-01-06', 'asd', 'qwe', '2021-12-22', '2021-12-30');

-- --------------------------------------------------------

--
-- Table structure for table `rentcars`
--

CREATE TABLE `rentcars` (
  `cID` int(11) NOT NULL,
  `rentcarmodel` varchar(255) DEFAULT NULL,
  `availability` tinyint(1) DEFAULT NULL,
  `rentprice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rentcars`
--

INSERT INTO `rentcars` (`cID`, `rentcarmodel`, `availability`, `rentprice`) VALUES
(1, 'tofas', 1, 100),
(2, 'tofas', 1, 100),
(3, 'mercedes', 1, 1000),
(4, 'nissan', 1, 250);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `uID` int(11) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `userid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uID` int(11) NOT NULL,
  `uname` varchar(255) DEFAULT NULL,
  `uemail` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `covidvac` int(1) DEFAULT NULL,
  `infos` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uID`, `uname`, `uemail`, `password`, `covidvac`, `infos`) VALUES
(4, NULL, 'erinc852@gmail.com', '123', NULL, NULL),
(5, NULL, 'ali@gmail.com', 'asd', NULL, NULL),
(6, NULL, 'ali@gmail.com', 'asd', NULL, NULL),
(9, 'asd', 'muho@gmail.com', 'asd', 3, 'asd'),
(31, 'Muhittin', 'asd@asd.com', '123', 2, 'asd'),
(32, 'Muhittin', 'muhittin@asd.com', '123', 2, 'asd'),
(33, 'qwe', 'qwe@asd.com', 'asd', 2, 'asd'),
(34, 'göksu', 'gök@asd.com', 'asd', 3, 'göksu'),
(35, 'qwer', 'asdf@asdf.com', 'asd', 3, 'asdf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD KEY `uID` (`uID`);

--
-- Indexes for table `advert`
--
ALTER TABLE `advert`
  ADD PRIMARY KEY (`aID`),
  ADD KEY `uID` (`uID`);

--
-- Indexes for table `pastpurchase`
--
ALTER TABLE `pastpurchase`
  ADD PRIMARY KEY (`pID`),
  ADD KEY `uID` (`uID`),
  ADD KEY `aID` (`aID`);

--
-- Indexes for table `rentcarpurchase`
--
ALTER TABLE `rentcarpurchase`
  ADD PRIMARY KEY (`rID`),
  ADD KEY `uID` (`uID`),
  ADD KEY `cID` (`cID`);

--
-- Indexes for table `rentcars`
--
ALTER TABLE `rentcars`
  ADD PRIMARY KEY (`cID`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD KEY `uID` (`uID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advert`
--
ALTER TABLE `advert`
  MODIFY `aID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `pastpurchase`
--
ALTER TABLE `pastpurchase`
  MODIFY `pID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `rentcarpurchase`
--
ALTER TABLE `rentcarpurchase`
  MODIFY `rID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `rentcars`
--
ALTER TABLE `rentcars`
  MODIFY `cID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`uID`) REFERENCES `users` (`uID`);

--
-- Constraints for table `advert`
--
ALTER TABLE `advert`
  ADD CONSTRAINT `advert_ibfk_1` FOREIGN KEY (`uID`) REFERENCES `users` (`uID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
