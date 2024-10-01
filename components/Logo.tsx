import { AspectRatio, Flex, Text } from "@chakra-ui/react";
import ImageLogo from "@/images/logo/JasLogo.png";
import Image from "next/image";

export function JasminaLogo() {
  return (
    <AspectRatio ratio={80 / 51} w="70px">
      <Image src={ImageLogo} alt="logo of the website" width={80} height={51} />
    </AspectRatio>
  );
}

export function Logo() {
  return (
    <>
      <Flex align="center">
        <JasminaLogo />
        <Text fontWeight="bolder" fontSize="lg" ml="4">
          Yoga Jasmina
        </Text>
      </Flex>
    </>
  );
}
