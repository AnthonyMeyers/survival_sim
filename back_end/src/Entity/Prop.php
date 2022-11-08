<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PropRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PropRepository::class)]
#[ApiResource(/*mercure: true,*/
    normalizationContext: ['groups' => ['Prop','Prop-read']],
    denormalizationContext: ['groups' => ['Prop','Prop-write']],)]
class Prop
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['Prop-read','WorldmapProp'])]
    private ?int $id = null;


    #[ORM\Column(length: 100)]
    #[Groups('Prop')]
    #[ApiFilter(SearchFilter::class, properties: ['prpName' => 'ipartial'])]
    private ?string $prpName = null;

    #[ORM\Column(length: 100)]
    #[Groups('Prop')]
    private ?string $prpFile = null;

    #[ORM\OneToMany(mappedBy: 'wmppPrpId', targetEntity: WorldmapProp::class, orphanRemoval: true)]
    private Collection $worldmapProps;

    public function __construct()
    {
        $this->worldmapProps = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrpName(): ?string
    {
        return $this->prpName;
    }

    public function setPrpName(string $prpName): self
    {
        $this->prpName = $prpName;

        return $this;
    }

    public function getPrpFile(): ?string
    {
        return $this->prpFile;
    }

    public function setPrpFile(string $prpFile): self
    {
        $this->prpFile = $prpFile;

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
            $worldmapProp->setWmppPrpId($this);
        }

        return $this;
    }

    public function removeWorldmapProp(WorldmapProp $worldmapProp): self
    {
        if ($this->worldmapProps->removeElement($worldmapProp)) {
            // set the owning side to null (unless already changed)
            if ($worldmapProp->getWmppPrpId() === $this) {
                $worldmapProp->setWmppPrpId(null);
            }
        }

        return $this;
    }
}
