<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\WorldmapAnimalRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;

#[ORM\Entity(repositoryClass: WorldmapAnimalRepository::class)]
#[ApiResource(/*mercure: true,*/
    normalizationContext: ['groups' => ['WorldmapAnimal','WorldmapAnimal-read'],"enable_max_depth"=>true],
    denormalizationContext: ['groups' => ['WorldmapAnimal','WorldmapAnimal-write']],)]
class WorldmapAnimal
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('WorldmapAnimal-read')]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'worldmapAnimals')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups('WorldmapAnimal')]
    private ?Worldmap $worldmap = null;

    #[ORM\ManyToOne(inversedBy: 'worldmapAnimals')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups('WorldmapAnimal')]
    private ?Animal $animal = null;

    #[ORM\Column]
    #[Groups('WorldmapAnimal')]
    private ?int $wmpaPosX = null;

    #[ORM\Column]
    #[Groups('WorldmapAnimal')]
    private ?int $wmpaPosY = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getWorldmap(): ?Worldmap
    {
        return $this->worldmap;
    }

    public function setWorldmap(?Worldmap $worldmap): self
    {
        $this->worldmap = $worldmap;

        return $this;
    }

    public function getAnimal(): ?Animal
    {
        return $this->animal;
    }

    public function setAnimal(?Animal $animal): self
    {
        $this->animal = $animal;

        return $this;
    }

    public function getWmpaPosX(): ?int
    {
        return $this->wmpaPosX;
    }

    public function setWmpaPosX(int $wmpaPosX): self
    {
        $this->wmpaPosX = $wmpaPosX;

        return $this;
    }

    public function getWmpaPosY(): ?int
    {
        return $this->wmpaPosY;
    }

    public function setWmpaPosY(int $wmpaPosY): self
    {
        $this->wmpaPosY = $wmpaPosY;

        return $this;
    }
}
