<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221112165942 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE animal (id INT AUTO_INCREMENT NOT NULL, anl_name VARCHAR(100) NOT NULL, anl_file VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE worldmap_animal (id INT AUTO_INCREMENT NOT NULL, worldmap_id INT NOT NULL, animal_id INT NOT NULL, INDEX IDX_4A9F7027589D61F7 (worldmap_id), INDEX IDX_4A9F70278E962C16 (animal_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE worldmap_animal ADD CONSTRAINT FK_4A9F7027589D61F7 FOREIGN KEY (worldmap_id) REFERENCES worldmap (id)');
        $this->addSql('ALTER TABLE worldmap_animal ADD CONSTRAINT FK_4A9F70278E962C16 FOREIGN KEY (animal_id) REFERENCES animal (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE worldmap_animal DROP FOREIGN KEY FK_4A9F7027589D61F7');
        $this->addSql('ALTER TABLE worldmap_animal DROP FOREIGN KEY FK_4A9F70278E962C16');
        $this->addSql('DROP TABLE animal');
        $this->addSql('DROP TABLE worldmap_animal');
    }
}
