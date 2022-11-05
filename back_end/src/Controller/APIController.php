<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\Security\Core\Security;
use  App\Repository\UserRepository;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/api")
 */
class APIController extends AbstractController
{
  private $userPasswordEncoder;
  /**
   * @Route("/local_login", name="test_login", methods="POST")
   */
  public function publicLogin(Request $request, UserRepository $userRepository,JWTTokenManagerInterface $jwt
                              , UserPasswordEncoderInterface $encoder)
  : JsonResponse
  {

      $name = json_decode($request->getContent(), true);

        $user = $userRepository
            ->findOneBy(['username' => $name["username"]]);

        $isValidPassword = $encoder->isPasswordValid($user, $name["password"]);;

            if (!$user || !$isValidPassword ) {
                  throw new \Doctrine\DBAL\Exception("User not found or password incorrect.");
                  if(!$user->getId() && $user->getId <= 0){throw new \Doctrine\DBAL\Exception("Invalid user.");}
              }

            $token = $jwt->create($user);
            $userId = $user->getId();

    return new JsonResponse(['token'=>$token,'userId' => $userId]);

  }
}
