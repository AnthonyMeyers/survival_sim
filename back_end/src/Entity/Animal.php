<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AnimalRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AnimalRepository::class)]
#[ApiResource(/*mercure: true,*/
    normalizationContext: ['groups' => ['Animal','Animal-read']],
    denormalizationContext: ['groups' => ['Animal','Animal-write']],)]
class Animal
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['Animal-read','WorldmapAnimal'])]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Groups('Animal')]
    private ?string $AnlName = null;

    #[ORM\Column(length: 100)]
    #[Groups('Animal')]
    private ?string $anlFile = null;

    #[ORM\OneToMany(mappedBy: 'animal', targetEntity: WorldmapAnimal::class, orphanRemoval: true)]
    private Collection $worldmapAnimals;

    public function __construct()
    {
        $this->worldmapAnimals = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAnlName(): ?string
    {
        return $this->AnlName;
    }

    public function setAnlName(string $AnlName): self
    {
        $this->AnlName = $AnlName;

        return $this;
    }

    public function getAnlFile(): ?string
    {
        return $this->anlFile;
    }

    public function setAnlFile(string $anlFile): self
    {
        $this->anlFile = $anlFile;

        return $this;
    }

    /**
     * @return Collection<int, WorldmapAnimal>
     */
    public function getWorldmapAnimals(): Collection
    {
        return $this->worldmapAnimals;
    }

    public function addWorldmapAnimal(WorldmapAnimal $worldmapAnimal): self
    {
        if (!$this->worldmapAnimals->contains($worldmapAnimal)) {
            $this->worldmapAnimals->add($worldmapAnimal);
            $worldmapAnimal->setAnimal($this);
        }

        return $this;
    }

    public function removeWorldmapAnimal(WorldmapAnimal $worldmapAnimal): self
    {
        if ($this->worldmapAnimals->removeElement($worldmapAnimal)) {
            // set the owning side to null (unless already changed)
            if ($worldmapAnimal->getAnimal() === $this) {
                $worldmapAnimal->setAnimal(null);
            }
        }

        return $this;
    }
}
