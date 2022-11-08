<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221106090516 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE prop (id INT AUTO_INCREMENT NOT NULL, prp_name VARCHAR(100) NOT NULL, prp_file VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE worldmap (id INT AUTO_INCREMENT NOT NULL, wmp_name VARCHAR(100) NOT NULL, wmp_file VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE worldmap_prop (id INT AUTO_INCREMENT NOT NULL, wmpp_wmp_id_id INT NOT NULL, wmpp_prp_id_id INT NOT NULL, wmpp_pos_x INT NOT NULL, wmpp_pos_y INT NOT NULL, INDEX IDX_A74BAD55F24BCC95 (wmpp_wmp_id_id), INDEX IDX_A74BAD5533B182DB (wmpp_prp_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE worldmap_prop ADD CONSTRAINT FK_A74BAD55F24BCC95 FOREIGN KEY (wmpp_wmp_id_id) REFERENCES worldmap (id)');
        $this->addSql('ALTER TABLE worldmap_prop ADD CONSTRAINT FK_A74BAD5533B182DB FOREIGN KEY (wmpp_prp_id_id) REFERENCES prop (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE worldmap_prop DROP FOREIGN KEY FK_A74BAD55F24BCC95');
        $this->addSql('ALTER TABLE worldmap_prop DROP FOREIGN KEY FK_A74BAD5533B182DB');
        $this->addSql('DROP TABLE prop');
        $this->addSql('DROP TABLE worldmap');
        $this->addSql('DROP TABLE worldmap_prop');
    }
}
