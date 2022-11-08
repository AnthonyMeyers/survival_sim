<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\WorldmapPropRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;

#[ORM\Entity(repositoryClass: WorldmapPropRepository::class)]
#[ApiResource(/*mercure: true,*/
    normalizationContext: ['groups' => ['WorldmapProp','WorldmapProp-read'],"enable_max_depth"=>true],
    denormalizationContext: ['groups' => ['WorldmapProp','WorldmapProp-write']],)]
class WorldmapProp
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('WorldmapProp-read')]
    #[MaxDepth(1)]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'worldmapProps')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups('WorldmapProp')]
    #[MaxDepth(1)]
    private ?Worldmap $wmppWmpId = null;

    #[ORM\ManyToOne(inversedBy: 'worldmapProps')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups('WorldmapProp')]
    #[MaxDepth(1)]
    private ?Prop $wmppPrpId = null;

    #[ORM\Column]
    #[Groups('WorldmapProp')]
    #[MaxDepth(1)]
    private ?int $wmppPosX = null;

    #[ORM\Column]
    #[Groups('WorldmapProp')]
    #[MaxDepth(1)]
    private ?int $wmppPosY = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getWmppWmpId(): ?Worldmap
    {
        return $this->wmppWmpId;
    }

    public function setWmppWmpId(?Worldmap $wmppWmpId): self
    {
        $this->wmppWmpId = $wmppWmpId;

        return $this;
    }

    public function getWmppPrpId(): ?Prop
    {
        return $this->wmppPrpId;
    }

    public function setWmppPrpId(?Prop $wmppPrpId): self
    {
        $this->wmppPrpId = $wmppPrpId;

        return $this;
    }

    public function getWmppPosX(): ?int
    {
        return $this->wmppPosX;
    }

    public function setWmppPosX(int $wmppPosX): self
    {
        $this->wmppPosX = $wmppPosX;

        return $this;
    }

    public function getWmppPosY(): ?int
    {
        return $this->wmppPosY;
    }

    public function setWmppPosY(int $wmppPosY): self
    {
        $this->wmppPosY = $wmppPosY;

        return $this;
    }
}
