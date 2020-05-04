CREATE TABLE `contato` (
	`cont_codi` INT(11) NOT NULL AUTO_INCREMENT,
	`cont_nome` VARCHAR(100) NULL DEFAULT NULL COMMENT 'Nome completo' COLLATE 'utf8_unicode_ci',
	`cont_mail` VARCHAR(150) NOT NULL COMMENT 'E-mail profissional' COLLATE 'utf8_unicode_ci',
	`cont_site` VARCHAR(150) NULL DEFAULT NULL COMMENT 'Site' COLLATE 'utf8_unicode_ci',
	`cont_tel` VARCHAR(50) NULL DEFAULT NULL COMMENT 'Telefone' COLLATE 'utf8_unicode_ci',
	`cont_dcad` TIMESTAMP NULL DEFAULT current_timestamp() COMMENT 'Data de cadastro',
	`cont_dalt` DATETIME NULL DEFAULT NULL COMMENT 'Data de alteracao',
	`cont_ucad` INT(11) NOT NULL COMMENT 'Usuario responsavel por cadastrar',
	`cont_ualt` INT(11) NULL DEFAULT NULL COMMENT 'Usuario responsavel por alterar',
	`cont_link` VARCHAR(255) NULL DEFAULT NULL COMMENT 'Linkedin.' COLLATE 'utf8_unicode_ci',
	`cont_stat` DOUBLE(22,0) NULL DEFAULT '1' COMMENT 'status 1 ativo 0 inativo',
	`cont_face` VARCHAR(150) NULL DEFAULT NULL COMMENT 'Facebook' COLLATE 'utf8_unicode_ci',
	`cont_sobr` TEXT(65535) NULL DEFAULT NULL COMMENT 'Observações' COLLATE 'utf8_unicode_ci',
	PRIMARY KEY (`cont_codi`) USING BTREE,
	UNIQUE INDEX `cont_mail` (`cont_mail`) USING BTREE,
	UNIQUE INDEX `cont_nome_UNIQUE` (`cont_nome`) USING BTREE,
	UNIQUE INDEX `cont_tel` (`cont_tel`) USING BTREE,
	INDEX `fk_cont_ucad_idx` (`cont_ucad`) USING BTREE,
	INDEX `fk_cont_ualt_idx` (`cont_ualt`) USING BTREE
)
COLLATE='utf8_unicode_ci'
ENGINE=MyISAM;
