/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50621
Source Host           : 127.0.0.1:3306
Source Database       : cbpc

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2017-06-27 18:16:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tbl_attach
-- ----------------------------
DROP TABLE IF EXISTS `tbl_attach`;
CREATE TABLE `tbl_attach` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_type` varchar(255) DEFAULT NULL,
  `file_size` double DEFAULT NULL,
  `width` double DEFAULT NULL,
  `height` double DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `rec_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
