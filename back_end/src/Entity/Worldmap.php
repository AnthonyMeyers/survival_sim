<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\WorldmapRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WorldmapRepository::class)]
#[ApiResource(/*mercure: true,*/
    normalizationContext: ['groups' => ['Worldmap','Worldmap-read']],
    denormalizationContext: ['groups' => ['Worldmap','Worldmap-write']],)]
class Worldmap
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['Worldmap-read','WorldmapProp'])]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Groups('Worldmap')]
    private ?string $wmpName = null;

    #[ORM\Column(length: 100)]
    #[Groups('Worldmap')]
    private ?string $wmpFile = null;

    #[ORM\OneToMany(mappedBy: 'wmppWmpId', targetEntity: WorldmapProp::class, orphanRemoval: true)]
    private Collection $worldmapProps;

    public function __construct()
    {
        $this->worldmapProps = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getWmpName(): ?string
    {
        return $this->wmpName;
    }

    public function setWmpName(string $wmpName): self
    {
        $this->wmpName = $wmpName;

        return $this;
    }

    public function getWmpFile(): ?string
    {
        return $this->wmpFile;
    }

    public function setWmpFile(string $wmpFile): self
    {
        $this->wmpFile = $wmpFile;

        return $this;
    }

    /**
     * @return Collection<int, WorldmapProp>
     */
    public function getWorldmapProps(): Collection
    {
        return $this->worldmapProps;
    }

    public function addWorldmapProp(WorldmapProp $worldmapProp): self
    {
        if (!$this->worldmapProps->contains($worldmapProp)) {
            $this->worldmapProps->add($worldmapProp);
            $worldmapProp->setWmppWmpId($this);
        }

        return $this;
    }

    public function removeWorldmapProp(WorldmapProp $worldmapProp): self
    {
        if ($this->worldmapProps->removeElement($worldmapProp)) {
            // set the owning side to null (unless already changed)
            if ($worldmapProp->getWmppWmpId() === $this) {
                $worldmapProp->setWmppWmpId(null);
            }
        }

        return $this;
    }
}
